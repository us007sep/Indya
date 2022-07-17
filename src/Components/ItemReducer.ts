import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
    name:string,
    description:string,
    featured_image1:string,
    featured_image2:string,
    featured_image3:string,
    featured_image4:string,
    id:string,
    price:number,
    category:string,
    home:number,
    new:number
}

interface items {
    areloaded : boolean,
    it : Item[]
}

const _initialState : items = {
    areloaded:false,
    it:[],
}

const ItemsReducer = createSlice({
    name:'ItemsReducer',
    initialState:_initialState,
    reducers:{
        started_writing(state:items){
            state.areloaded=false
        },
        finished_writing(state:items , action:PayloadAction<Item[]>){
            state.it = action.payload;
            state.areloaded = true;
        }
    }
});

export const {started_writing,finished_writing} = ItemsReducer.actions;

export default ItemsReducer.reducer;
