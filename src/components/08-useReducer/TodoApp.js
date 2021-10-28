import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from '../../hooks/useForm'
import "./styles.css";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Aprender React",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  
  const [formValues, handleInputChange] = useForm({
      description:''
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formValues.description) return

    const newTodo = {
      id: new Date().getTime(),
      desc: formValues.description,
      done: false,
    };
    const action = {
        type: "add", 
        payload: newTodo 
    }
    dispatch(action);

  };

  return (
    <div>
      <h1>Todo App ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className={"list-group list-group-flush"}>
            {todos.map((todo, i) => {
              return (
                <li key={todo.id} className={"list-group-item"}>
                  <p className={"text-center"}>
                    {i + 1}. {todo.desc}
                  </p>
                  <button
                    className={"btn btn-danger"}
                    onClick={() => dispatch({ type: "remove", payload: todo })}
                  >
                    Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <div className="d-grid gap-2">
              <input
              value={formValues.description}
              onChange={handleInputChange}
                className="form-control"
                type="text"
                name="description"
                placeholder="Aprender ..."
                autoComplete="off"
              />
              <button className="btn btn-outline-primary">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
