import { Card, CardActionArea, CardContent, CardMedia, Fab, makeStyles, Typography } from "@material-ui/core"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AboutUs from "./AboutUs";
import { Schema } from "./AppState";
import { Item } from "./ItemReducer";

const useStyle = makeStyles({
    top:{
        backgroundColor:'#ffe05c',
        minHeight:38,
        display:'flex',
        justifyContent:'space-around',
        color:'black',
        borderRadius: '20px',
        margin:10,
        marginTop:25
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
    card:{
        width:window.innerWidth/3,
        borderRadius:20,
    },
    productDisplay:{
        margin:70,
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        paddingBottom:30,
        borderBottom:'1.5px #737270 solid'
    },
    buttons:{
        marginRight:20
    }
})

export default function Product(){
    const obj = useParams <{name:string}>();
    const style = useStyle();
    const selector = useSelector((x:Schema) => x.ItemsReducer);
    return(
        <>
        <div className={style.top}>
            <div className={style.topStyle}><b>Worldwide Shopping</b></div>
            <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
            <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
        </div>

        {selector.it.filter(x => x.name.includes(obj.name!)).map( x=>
        <div className={style.productDisplay}>
        <div style={{marginRight:40}}>
            
            <Card className = {style.card}>
                <CardActionArea>
                <CardMedia component="img" image={x.featured_image}/>
                </CardActionArea>
            </Card>
        </div>

        <div>
            <Typography variant="h5"><b>{x.name}</b></Typography>
            <Typography  variant="h6" style={{color:'red'}}><b> ₹ {x.price}/-</b></Typography><br></br>
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
            <Fab variant="extended" color="primary" className={style.buttons}>Buy Now</Fab>

            <br></br>

            </div>
        </div>)}

        <AboutUs/>
            
        </>

    )
}