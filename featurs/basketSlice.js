import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
        state.item = [...state.item,action.payload]
    },
    removefromBasket: (state,action) => {
        const index = state.item.findIndex( (item) => item.id === action.payload.id);
        let newBasket = [...state.item];

        if (index >= 0 ) 
            newBasket.splice(index,1);    
        else
            console.warn("Can't remove product, it's not in basket");

        state.item = newBasket;
    },  
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removefromBasket } = basketSlice.actions

export const itemOfTheBasket = (state) => state.basket.item ;
export const itemOfTheBasketWithID = (state,id) => state.basket.item.filter( (item) => item.id == id);

export const itemOfTheBasketTotalPrice = (state) => state.basket.item.reduce( (total,item) => total += item.price, 0) ;

export default basketSlice.reducer