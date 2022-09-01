import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Schema } from "./AppState";
import ItemCard from "./ItemCard";
import { finished_writing, Item, started_writing } from "./ItemReducer";

const useStyle = makeStyles({
    items_grid:{
        margin : 30,
        marginTop:90
    }
})

interface Iitems{
    data:{items:Item[]}
}

export default function (){
    const obj = useParams <{name:string}>();
    const style  = useStyle();
    const dispatch = useDispatch();
    const selector = useSelector((x:Schema) => x.ItemsReducer);

useEffect(()=>{
    async function api() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var graphql = JSON.stringify({
        query: "{\n  items{\n    name\n    description\n    featured_image1\n    featured_image2\n    featured_image3\n    featured_image4\n    category\n    price\n    home\n    new\n  }\n}",
        variables: {}
        })
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        };

        const response = await fetch("https://houseofindya.herokuapp.com/graphql", requestOptions);
        const json :Iitems= await response.json();

        dispatch(finished_writing(json.data.items));
    }
    dispatch(started_writing);
    api();    
},[dispatch])

    return(
        <>
            
             <Grid container spacing={6} className={style.items_grid}>
                {selector.it.filter(x => x.name.toLowerCase().includes(obj.name?.toLowerCase()!)).map(x=><Grid item>
                <ItemCard{...x}/></Grid>)}
            </Grid>


        </>
    )
}