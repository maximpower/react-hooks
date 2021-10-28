
export const todoReducer = (state = [], action) => {
    
    switch ( action?.type ) {
        case 'add':
            return [...state, action.payload];
        case 'remove':
            const newState = state.filter(todo => todo.id !== action.payload);
            return newState;
        default:
            return state;
    }
}
