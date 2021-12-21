export default (state, action) =>{
    switch(action.type) {
        case 'DELETE_TRANSACTIONS':
            return {
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !== action.payload)
            }
        case 'ADD_TRANSACTIONS':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        
        default:
            return state;
    }
}