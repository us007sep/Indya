import { Fab, Grid, makeStyles, Typography } from "@material-ui/core"
import card1 from "../Images/Favourites/Card1.jpeg"
import card2 from "../Images/Favourites/Card2.jpeg"
import card3 from "../Images/Favourites/Card3.jpeg"
import div2Img from "../Images/Div2.jpeg"
import trending from "../Images/Trending.jpeg"
import AboutUs from "./AboutUs"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Schema } from "./AppState"
import { finished_writing, Item, started_writing } from "./ItemReducer"
import LoadingSpinner from "./LoadingSpinner"
import ItemCard from "./ItemCard"
import Carousel from "./Carousel"


const useStyle = makeStyles({
    image:{
        maxWidth:window.innerWidth-20,
        margin:10,
        marginTop:0,
        marginBottom:10,
        borderRadius: '20px',
    },
    grid1:{
        margin:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',

    },
    grid1card:{
        maxWidth:'32%',
    },
    div2text:{
        textAlign: 'center',
        fontFamily: "'Lato',sans-serif",
        padding:25
    },
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
    videoDiv:{
        margin:20,
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    video:{
        width:'60%',
        marginRight:30,
    },
    items_grid:{
        margin : 30
    }

})

interface Iitems{
    data:{items:Item[]}
}

export default function Home(){
    const style = useStyle();
    const dispatch = useDispatch();
    const selector = useSelector((x:Schema) => x.ItemsReducer);
    const location = window.location;

    useEffect(()=>{
        async function api() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var graphql = JSON.stringify({
            query: "{\n    items{\n        name,\n        id,\n        featured_image,\n        price,\n        description,\n        category\n    }\n}",
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
            {!selector.areloaded && <LoadingSpinner/>}
            {selector.areloaded && <div>
            <div className={style.top}>
                <div className={style.topStyle}><b>Worldwide Shopping</b></div>
                <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
                <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
            </div>

            <Carousel/>
            
            <div className={style.grid1}>
                <img src={card1} className={style.grid1card} alt="card1"></img>
                <img src={card2} className={style.grid1card} alt="card2"></img>
                <img src={card3} className={style.grid1card} alt="card3"></img>
            </div>

            {/* Favourites this Season */}
            <div>
                <Typography variant="h4" className={style.div2text}><b>OUR FAVOURITES THIS SEASON</b></Typography>
                <img src={div2Img} className={style.image} alt="Favourites"></img>
            </div>

            <Grid container spacing={6} className={style.items_grid}>
                {selector.it.filter(x=> x.category.toLowerCase().includes("kurtis")).map(x=><Grid item>
                    <ItemCard{...x}/></Grid>)}
            </Grid>

            {/* Division for video + content */}
            <div className={style.videoDiv}>
                <div className={style.video}>
                <iframe width='100%'height={480} src="https://www.youtube.com/embed/ltXD5HU67KQ" allow="autoplay" allowFullScreen title="video"/>
                </div>
                <div  style={{width:'35%' , color:'solid black', fontFamily:'Lato,sans-serif'}}>
                <b style={{fontSize:50, borderBottom:'6px solid #000'}}>INDYA L</b><b style={{fontSize:50}}>UXE</b><br></br><br></br>
                <b style={{fontSize:17}}> The grandeur of maximal forms, lushness of colour, and splendour of rich details come together in Indya’s plush new line of festive finery, 
                Indya Luxe. Encompassing lavish head-to-toe ensembles laden with meticulous crafts and dipped in lush celebratory hues, 
                this collection is perfect for the modern bridesmaid at the quintessential big fat Indian wedding.</b>
                <br></br><br></br>
                <Fab color="secondary" variant="extended"><b>Shop the collection</b></Fab>
                </div>
            </div>

            {/* Division for 2 Videos */}
            <div className={style.videoDiv}>
                <div>
                    <iframe width={window.innerWidth/2.2} height={380} src="https://www.youtube.com/embed/We36ERbeHes" allow="autoplay" allowFullScreen title="video"/>
                </div>
                <div>
                    <iframe width={window.innerWidth/2.2} height={380} src="https://www.youtube.com/embed/ZOE6erHTBhE" allow="autoplay" allowFullScreen title="video"/>
                </div>
            </div>

            <div>
                <Typography variant="h4" className={style.div2text}><b>TRENDING RIGHT NOW</b></Typography>
                <img src={trending} className={style.image} alt="Trending"></img>
            </div>

            <Grid container spacing={6} className={style.items_grid}>
                {selector.it.filter(x=> x.category.toLowerCase().includes("lehngas")).map(x=><Grid item>
                    <ItemCard{...x}/></Grid>)}
            </Grid>

            <AboutUs/>
            </div>}
        </>
    )
}