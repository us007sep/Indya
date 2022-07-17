import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import { useEffect } from "react";
import Nav from "react-bootstrap/esm/Nav";
import { useDispatch, useSelector } from "react-redux";
import AboutUs from "./AboutUs";
import { Schema } from "./AppState";
import ItemCard from "./ItemCard";
import { finished_writing, Item, started_writing } from "./ItemReducer";
import LoadingSpinner from "./LoadingSpinner";

const useStyle = makeStyles({
    top:{
        backgroundColor:'#ffe05c',
        minHeight:38,
        display:'flex',
        justifyContent:'space-around',
        color:'black',
        borderRadius: '20px',
        margin:10,
        marginTop:90,
        width:window.innerWidth-20
    },
    top_sub:{
        backgroundColor:'#b69575',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minWidth:window.innerWidth/3,
    },
    topStyle:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        minWidth:window.innerWidth/3,
    },
    items_grid:{
        margin : 30,
        marginTop:0
    }
})

interface Iitems{
    data:{items:Item[]}
}

export default function Kurtis(){
    const style = useStyle();
    const selector = useSelector((x:Schema) => x.ItemsReducer);
    const dispatch = useDispatch();

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
        <div>    
            <div className={style.top}>
                <div className={style.topStyle}><b>Worldwide Shopping</b></div>
                <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
                <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
            </div>

            <div style={{marginLeft: 40,display:"flex",flexDirection:'row'}}> 
            <br></br>
            <Nav.Link href="/Home" id="Home" style={{color:'black'}}><b><h6>Home  |</h6></b></Nav.Link>
            <Nav.Link href="/Lehngas&Sarees" id="Lehngas" style={{color:'red', marginLeft:-20}}><b><h6>Lehngas & Sarees</h6></b></Nav.Link>
            </div>

            <Grid container spacing={6} className={style.items_grid}>
            {selector.it.filter(x=> x.category.toLowerCase().includes("lehngas")).map(x=><Grid item>
                <ItemCard{...x}/></Grid>)}
            </Grid>
        </div>}        
        <AboutUs/>
        </>
    )
}