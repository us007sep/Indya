import { Button, makeStyles} from "@material-ui/core";
import {useNavigate } from "react-router-dom";
import logo from "../Images/Logo.png"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Schema } from "./AppState";
import { useContext} from "react";
import { Item } from "./ItemReducer";
import { UserContext } from "./UserContext";


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
    searchResult:{
        zIndex:2000
    },
})



export default function Navigation(){
    const style = useStyle();
    const hist = useNavigate();
    const context = useContext(UserContext);

    const userExist = context;

    var list : Item[] = [];
    const selector = useSelector((x:Schema) => x.ItemsReducer)

    const inputEvent = (e:string) =>{
        list = [];
        selector.it.filter(x=> x.name.toLowerCase().includes(e)).map((x)=>list.push(x));
        console.log(list);
    }

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
                    <Nav.Link href="/Home" id="Home" style={{color:'red'}}><b>Home</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Kurtis")} id="Kurtis"><b>Kurtis</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Lehngas&Sarees")} id="Lehngas"><b>Lehngas & Sarees</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/Accessories")} id="Accessories"><b>Accessories</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/NewArrivals")} id="NewArrivals" style={{color:'red'}}><b>New Arrivals</b></Nav.Link>
                    <Nav.Link onClick={()=>hist("/AboutUs")} id="About Us" style={{color:'red'}}><b>About Us</b></Nav.Link>
                    {!userExist && <Nav.Link onClick={()=>hist("/Login")} id="Login"><b>Login</b></Nav.Link>}
                    {!userExist && <Nav.Link onClick={()=>hist("/SignUp")} id="SignUp"><b>SignUp</b></Nav.Link>}
                    {userExist && <Nav.Link onClick={()=>hist("/Profile")} id="Profile"><b>Profile</b></Nav.Link>}
                    {userExist && <Nav.Link onClick={()=>hist("/LogOut")} id="Log Out" style={{color:'red'}}><b>Log Out</b></Nav.Link>}
                </Nav>

                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => inputEvent(e.target.value)}
                    />
                    <Button variant="outlined" style={{backgroundColor:'#b69575', color:'#fff'}}>Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            
        </>
    ) 
}


