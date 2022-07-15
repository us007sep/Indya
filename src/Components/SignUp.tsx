import Authentication from "./Authentication";
import firebase from "firebase";

export default function SignUp(){
    return(
        <Authentication title="Sign Up" showLogin={true} showfname={true} showlname={true}/>
    )
}