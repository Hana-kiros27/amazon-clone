import { Type } from "./actiontype";
export const initialState = {
  basket: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      // return {
      //   // to keep state
      // ...state,
      // basket: [...state.basket, action.item],
      // };
      // check if the item exist

      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updateBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return {
          ...state,
          basket: updateBasket,
        };
      }

case REMOVE_FROM_BASKET:

   const index = state.basket.findIndex((item) => item.id === action.id);
let newBaseket={...state.basket}
if(index>=0){

if(newBaseket){
  if(newBaseket[index].amount>1){
    newBaseket[index]={...newBaseket[index],amount:newBaseket[index].amount-1}
  }
}else{
  newBaseket.splice(index,1)
}
}
return {
  ...state,
   basket:newBaseket
}

    default:
      return state;
  }
};

// const [state, dispatch] = useReducer
