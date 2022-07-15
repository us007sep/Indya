import { AppBar, Button,  InputBase, makeStyles, Toolbar } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import logo from "../Images/Logo.png"
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
    img:{
        maxHeight:'30px',
        marginRight:'30px',
        marginLeft:'30px'
    },
})

export default function Navigation(){
    const style = useStyle();
    const isHome = window.location.href.indexOf("Home") !== -1 ;
    const isAboutUs = window.location.href.indexOf("AboutUs") !== -1 ;
    const hist = useNavigate();
    return(
        <>
            <Navbar expand="lg" fixed="top" style={{backgroundColor:'#f6f1db', border: '1.5px #000 solid',}} >
            <Container fluid >
                <Navbar.Brand href="/"><img src={logo} className={style.img} alt="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    {!isHome && <Nav.Link href="/Home"><b>Home</b></Nav.Link>}
                    <Nav.Link onClick={()=>hist("/Kurtis")}><b>Kurtis</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Lehngas&Sarees")}><b>Lehngas & Sarees</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Login")}><b>Login</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/SignUp")}><b>SignUp</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Profile")}><b>Profile</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Cart")}><b>Cart</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/AboutUs")}><b>About Us</b></Nav.Link>
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outlined" style={{backgroundColor:'#b69575', color:'#fff'}}>Search</Button>
                </Form>
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