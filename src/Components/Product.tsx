import { Card, CardActionArea, CardMedia, Fab, makeStyles, Typography } from "@material-ui/core"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AboutUs from "./AboutUs";
import { Schema } from "./AppState";
import { finished_writing, Item, started_writing } from "./ItemReducer";
import LoadingSpinner from "./LoadingSpinner";

const useStyle = makeStyles({
    card:{
        width:window.innerWidth/4,
        borderRadius:20,
    },
    productDisplay:{
        margin:30,
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        paddingBottom:30,
        borderBottom:'1.5px #737270 solid'
    },
    buttons:{
        marginRight:20
    },
    otherImages:{
        width:window.innerWidth/4,
        borderRadius:20,
        marginLeft:90
    }
})

interface Iitems{
    data:{items:Item[]}
}

export default function Product(){
    const obj = useParams <{name:string}>();
    const style = useStyle();
    const selector = useSelector((x:Schema) => x.ItemsReducer);
    const dispatch = useDispatch();
    const history = useNavigate();

    useEffect(()=>{
        async function api() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var graphql = JSON.stringify({
            query: "{\n  items{\n    name\n    description\n    featured_image1\n    featured_image2\n    featured_image3\n    featured_image4\n    category\n    price\n    home\n    new\n  }\n}",
            variables: {}
            })
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            };

            const response = await fetch("https://houseofindya.herokuapp.com/graphql", requestOptions);
            const json :Iitems= await response.json();

            dispatch(finished_writing(json.data.items));
        }
        dispatch(started_writing);
        api();    
    },[dispatch])

    return(
        <>
        {!selector.areloaded && <LoadingSpinner />} 
        {selector.areloaded && 
        <div style={{marginTop:90}}>

        {selector.it.filter(x => x.name.includes(obj.name!)).map( x=>
        <div>
        <div className={style.productDisplay}>
        <div style={{marginRight:40}}>

            <Card className = {style.card}>
                <CardActionArea>
                <CardMedia component="img" image={x.featured_image1}/>
                </CardActionArea>
            </Card>

        </div>

        

        <div>
            <Typography variant="h5"><b>{x.name}</b></Typography>
            <Typography  variant="h6" style={{color:'red'}}><b> ₹ {x.price}/-</b></Typography>
            <Typography  variant="body1" style={{color:'grey'}}><b> Inclusive of all taxes</b></Typography><br></br>

            <Typography>Description</Typography>
            <Typography variant="body2" style={{color:'grey'}}>{x.description}</Typography>

            <br></br>

            <br></br>

            <Typography>Shipping</Typography>
            <Typography variant="body2" style={{color:'grey'}}>
            Dispatch: Within 48-72 Hours 
            Delivery time within India - 4-6* business days
            International delivery time - 7-12* business days
            *Note: Delivery of orders may take longer due to region-wise lockdown and diversion of routes.
            Return/Exchange: If you are not completely satisfied with your purchase, simply select the option of return/exchange within 15 days of receiving your order from your order details page and we will process your return, no questions asked.
            </Typography>

            <br></br><br></br>
            
            <Fab variant="extended" color="secondary" className={style.buttons}>Add to Bag</Fab>
            <Fab variant="extended" color="inherit" className={style.buttons} onClick={()=>history("/NewArrivals")}>Check New Arrivals</Fab>
            <Fab variant="extended" color="primary" className={style.buttons}>Buy Now</Fab>
            <br></br>

            </div>
        </div>

        <div style={{marginLeft:90, color:'red'}}><b><h5>PRODUCT GALLERY</h5></b><br></br></div>

        <div style={{display:'flex',flexDirection:"row", marginBottom:70}}>
            <Card className = {style.otherImages}>
                <CardActionArea>
                <CardMedia component="img" image={x.featured_image2}/>
                </CardActionArea>
            </Card>
            <Card className = {style.otherImages}>
                <CardActionArea>
                <CardMedia component="img" image={x.featured_image3}/>
                </CardActionArea>
            </Card>
            <Card className = {style.otherImages}>
                <CardActionArea>
                <CardMedia component="img" image={x.featured_image4}/>
                </CardActionArea>
            </Card>
        </div>
        </div>)}
            
        </div>}
        <AboutUs/>
        </>

    )
}

