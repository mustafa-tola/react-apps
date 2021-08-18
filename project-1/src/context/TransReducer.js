export const transReducer = ((state,action) => {
    switch(action.type) {
        case "ADD_TRANS":
            {
                return [...state,action.payload]
            }
        case "DEL_TRANSACTION":
            return state.filter(transaction => transaction.id != action.payload)
        default:
            return state
    }
})