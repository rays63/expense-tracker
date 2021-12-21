import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state
const initialState ={
    transactions: []
    }

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actionsn
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}