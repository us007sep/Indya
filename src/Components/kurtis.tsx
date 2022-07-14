import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles"
import { useSelector } from "react-redux";
import { Schema } from "./AppState";
import ItemCard from "./ItemCard";

const useStyle = makeStyles({
    top:{
        backgroundColor:'#ffe05c',
        minHeight:38,
        display:'flex',
        justifyContent:'space-around',
        color:'black',
        borderRadius: '20px',
        margin:10,
        marginTop:90
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

export default function Kurtis(){
    const style = useStyle();
    const selector = useSelector((x:Schema) => x.ItemsReducer);
    return(
        <>
        <div className={style.top}>
                <div className={style.topStyle}><b>Worldwide Shopping</b></div>
                <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
                <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
        </div>

        <Grid container spacing={6} className={style.items_grid}>
        {selector.it.filter(x=> x.category.toLowerCase().includes("kurtis")).map(x=><Grid item>
            <ItemCard{...x}/></Grid>)}
        </Grid>
        </>
    )
}