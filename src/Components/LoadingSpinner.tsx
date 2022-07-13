import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    spinner:{
        height:'100%',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    backdrop:{
        zIndex:1000,
    }
})

export default function LoadingSpinner(){
    const style=useStyle();
    const renderSpinner=()=>{
        return(
        <div className={style.spinner}>
                <CircularProgress/>
        </div>
        )
    }

    return (
        <Backdrop open={true} className={style.backdrop}>       
            {renderSpinner()}
        </Backdrop> 
    )
}