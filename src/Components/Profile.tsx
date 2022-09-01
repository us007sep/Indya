import { Card, CardActionArea, CardContent, CardMedia, Fab, makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react";
import { AddAPhoto } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import background from "../Images/SignUp.jpeg";
import LogOut from "./LogOut";
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
        width:'40%',
        backgroundColor:'#f6f1db',
        padding:20,
        borderRadius:20,
        border: '1.5px #000 solid',
    },
    buttons:{
        display:'flex',
        justifyContent:'flex-end',
        gap:15,
        margin:'10px'
    },
})

export default function Profile(){
    const style = useStyle();
    const context = useContext(UserContext);
    const hist = useNavigate();

    const userExist = context;
    
    return(
        <div className={style.parent_container}>
            <div className={style.container}>
            <Card >
                <CardActionArea>
                    {userExist?.photoURL && <CardMedia component="img" image={userExist?.photoURL!} alt="Name" />}
                    <CardContent>
                    <Typography variant="h5"><b>Username : </b>{userExist?.displayName}</Typography>
                    <Typography variant="h5" id='email'><b>E:Mail : </b>{userExist?.email}</Typography>

                    </CardContent>
                </CardActionArea>
            </Card>

            <div className={style.buttons}>
            <Fab color="primary" variant="extended" id='DPChange' onClick={()=>{hist("/DPChange")}} >
                <AddAPhoto> </AddAPhoto>
            </Fab>
            <Fab color="secondary" variant="extended" id='changePass' onClick={()=>{hist("/PasswordChange")}}>Change Password</Fab>    
            <Fab color="primary" variant="extended" id='logout' onClick={()=>hist("/LogOut")}>Sign Out</Fab>
            <Fab color="secondary" variant="extended" id='home' onClick={()=>hist("/Home")}>Home</Fab>
            </div>    
            </div>
        </div>
    )
}