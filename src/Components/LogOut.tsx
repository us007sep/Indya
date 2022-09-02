import { Fab, makeStyles } from "@material-ui/core"
import firebase from "firebase";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import background from "../Images/SignUp.jpeg";
import { UserContext } from "./UserContext";

const useStyle = makeStyles({
    parent_container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:`url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        gap: 15,
        width:'30%',
        backgroundColor:'#f6f1db',
        padding:20,
        borderRadius:20,
        border: '1.5px #000 solid',
    },
    buttons:{
        display:'flex',
        flexDirection:'row-reverse'
    }
})

export default function LogOut(){
    const style = useStyle();
    const history = useNavigate();
    const context = useContext(UserContext);

    const userExist = context;

    return(
        <>
        {userExist && <div className={style.parent_container}>
            <div className={style.container}>
                <h4>Confirm to Logout</h4>
                <div className={style.buttons}>
                    <Fab variant="extended" color="primary" onClick={()=>history("/Home")}>No, Go to Home</Fab>
                    <Fab variant="extended" color="secondary" style={{marginRight:20}} onClick={()=>{
                        firebase.auth().signOut();
                        history("/Home");
                    }}>Yes, Logout</Fab>
                </div>
                
            </div>
        </div>}
        </>
    )
}
