import { AppBar, Button,  InputBase, makeStyles, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import start from "../Images/Logo.png"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const useStyle = makeStyles({
    navbar:{
        backgroundColor:'#f6f1db',
        maxHeight:'70px',
        border: '1.5px #000 solid',
        width:'100%',
        position:'fixed',
        zIndex:1000,
        top:0

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
        marginRight:'30px',
        marginLeft:'30px'
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
            <Navbar className={style.navbar} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={start} className={style.img} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Button className={style.redButtons} onClick={()=> hist("/Lehngas&Sarees")}><b>Lehngas & Sarees</b></Button>
                    <Button onClick={()=> hist("/Kurtis")}><b>Kurtis</b></Button>

                <Form className="d-flex" style={{width:'600px', backgroundColor:'#b69575',border:'1.5px black solid',margin:20}}>
                    <Form.Control
                    type="search"
                    placeholder="Search for products, brands and more..."
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outlined" style={{backgroundColor:'#b69575', borderColor:'#b69575'}}><b>Search</b></Button>
                </Form>
                
                    {!isAboutUs && <Button onClick={()=>hist("/AboutUs")}><b>About Us</b></Button>}
                    {!isHome && <Button onClick={()=> hist("/Home")}><b>Home</b></Button>}
                    <Button><b>Login</b></Button>
                </Nav>
                
                </Navbar.Collapse>
            </Container>
            </Navbar>
            {/* <AppBar  position='fixed'>
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
            </AppBar> */}
        </>
    )
}