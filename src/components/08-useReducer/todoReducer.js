export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    case 'edit':
        return state.map( todo => 
            (todo.id === action.payload)
                ? {...todo, done: !todo.done}
                : todo
            );
    case "edit-old":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
