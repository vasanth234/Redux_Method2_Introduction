//redux is useful for state management
//right now we got the advanced feature is reduxtoolkit and creatstore is depreciated as the old it is
//but for learning purpose we can use the creatstore from the redux
//in this store we had created one object which have the details for one candidate
//to create map between state and function we do use the 
import { createStore } from 'redux'
const initialState = {
    balance: 0,
    fullName: "",
    mobile: null,
};


//to map this reducer with state in the store file we do use the createStore 
//mandatory rule it is in the reducer we needs to assign the initialState object to the state varibale by default
//we dont call directly the reducer instead of this we do call dispatch method and automatically this reducer function will call
//usually we do destructure the action into {type,payload} but in this code we are directly calling as action.type
//we dont directly modify the state values ,in middle we do use reducer as function to get spread operator and we can add the new value
function reducer(state = initialState, action) {
    //we can also destruture the action 
    //we can also switch case to divide the actions easier
    if (action.type == 'deposit')
        //now we had created the new state so we should return

        return { ...state, balance: state.balance + action.payload }
    else if (action.type == 'withdraw')

        return { ...state, balance: state.balance - action.payload }
    else if (action.type == 'name')

        return { ...state, fullName: action.payload }
        else if (action.type == 'mobile')

            return { ...state, mobile: action.payload }
    

}

//whatever we are giving the object as type it will moved to action as the 2nd arguement in the reducer function/


const store = createStore(reducer)


store.dispatch({ type: 'deposit', payload: 1000 })
console.log(store.getState())
store.dispatch({ type: 'withdraw', payload: 500 })
console.log(store.getState())
store.dispatch({ type: 'name', payload: "karna" })
console.log(store.getState())
store.dispatch({ type: 'mobile', payload:2429492342 })
console.log(store.getState())