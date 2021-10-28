const initialState = [
  {
    id: 1,
    todo: "Comprar leche",
    done: false,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case "add":
      return [
          ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Comprar el pan",
  done: false,
};

todos = todoReducer(todos, {
  type: "add",
  payload: newTodo,
});

console.log(todos);
