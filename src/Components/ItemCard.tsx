import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import { Item } from "./ItemReducer";

const useStyle = makeStyles({
    card:{
        width:window.innerWidth/5,
        borderRadius:20,
        height:'540px'
    }
})

export default function(prop : Item){
    const hist = useNavigate();
    const style = useStyle();
    return(
        <Card className={style.card} onClick={()=>hist("/Products/"+ prop.name)}>
            <CardActionArea>
                <CardMedia component="img" image={prop.featured_image} alt={prop.name}/>
                <CardContent>
                    <Typography><b>{prop.name}</b></Typography>
                    <Typography style={{color:'#b69575'}}><b>Rs {prop.price}</b></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}