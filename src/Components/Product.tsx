import { makeStyles } from "@material-ui/core"

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
})

export default function Product(){
    const style = useStyle();
    return(
        <div className={style.top}>
                <div className={style.topStyle}><b>Worldwide Shopping</b></div>
                <div className={style.top_sub}><b>The Big Indya Sale | Upto 70% OFF</b></div>
                <div className={style.topStyle}><b>📢 Free Shipping on All Orders</b></div>
        </div>
    )
}