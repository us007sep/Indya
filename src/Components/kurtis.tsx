import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import { useEffect } from "react";
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
        margin : 30
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
        {!selector.areloaded && <LoadingSpinner />} 
        {selector.areloaded &&    
        <div>
        <div className={style.top}>
            <div className={style.topStyle}><b>Worldwide Shopping</b></div>
            <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
            <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
        </div>

        <Grid container spacing={6} className={style.items_grid}>
        {selector.it.filter(x=> x.category.toLowerCase().includes("kurtis")).map(x=><Grid item>
            <ItemCard{...x}/></Grid>)}
        </Grid>
        <AboutUs/>
        </div>}
        </>
    )
}