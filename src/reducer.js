export const initialState = {
    basket:[],
    user: null
};

// Selector used
// To increment the basket total and the price
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


// Reducer action what to do in the basket
const reducer = (state, action) => {
    console.log(action); 
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

            // case "REMOVE_FROM_BASKET":
            //     return {
            //         ...state,
            //         basket: state.basket.filter(item => item.id !== action.id)              // Removes all the same items in the cart
            //     }
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if (index >= 0) {
                    newBasket.splice(index, 1);

                } else {
                    console.warn(
                        `cant remove product (id: ${action.id}) as its not in basket!`
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }

            case "SET_USER":
                return {
                    ...state,
                    user: action.user
                }
            default:
                return state;
    }

};

export default reducer;