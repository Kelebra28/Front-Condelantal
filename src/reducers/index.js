
const initialState = {}

export default function(state=initialState,actions){

        switch(actions.type){
            case 'ADD_PRODUCT':
                return {...state,...actions.dates}
            
            case 'ADD_PRICE':
                return {...state,...actions.price}
            
            case 'ADD_PAYPAL':
                return {...state,...actions.paypal}
            default:
                return state;

        }

}