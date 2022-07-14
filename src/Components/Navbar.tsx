import { AppBar, Button, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import start from "../Images/Logo.png"

const useStyle = makeStyles({
    navbar:{
        backgroundColor:'#f6f1db',
        maxHeight:'30px',
        border: '1px #000 solid',
    },
    searchBar:{
        backgroundColor:'#b69575',
        minWidth:window.innerWidth/2.3,
        marginLeft:20,
        marginRight:5,
        borderRadius:'4px',
        border: '1.5px #000 solid',
    },
    buttons:{
        display:'flex',
        flexDirection:'row'
    },
    img:{
        maxHeight:'30px',
        marginRight:'30px'
    },
    redButtons:{
        color:'#b69575'
    },
})

export default function Navigation(){
    const style = useStyle();
    const isHome = window.location.href.indexOf("Home") !== -1 ;
    const isAboutUs = window.location.href.indexOf("AboutUs") !== -1 ;
    const hist = useNavigate();
    return(
        <>
            <AppBar  position='fixed'>
                <Toolbar className={style.navbar}>
                    <img src={start} className={style.img} alt="logo"></img>
                    <div className={style.buttons}>
                        <Button className={style.redButtons} onClick={()=> hist("/Lehngas&Sarees")}><b>Lehngas & Sarees</b></Button>
                        <Button onClick={()=> hist("/Kurtis")}><b>Kurtis</b></Button>
                        <Button className={style.redButtons}><b>Sale</b></Button>
                    </div>
                    <div className={style.searchBar}>
                    <InputBase  style={{width:'87%',backgroundColor:'white', border: '2px white solid',borderBottom:'3px white solid'}} placeholder="Search for products, brands and more..."/>
                    <Button><b>Search</b></Button>
                    </div>
                    <div className={style.buttons} >
                        {!isHome && <Button onClick={()=> hist("/Home")}><b>Home</b></Button>}
                        <Button><b>Cart</b></Button>
                        {!isAboutUs && <Button onClick={()=>hist("/AboutUs")}><b>About Us</b></Button>}
                        <Button><b>Login</b></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}