import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { useEffect } from "react/cjs/react.development";

const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];

  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  const handleDelete = (todoId) => {
    console.log(todoId);

    const action = {
      type: 'remove',
      payload: todoId
    }

    dispatch(action);
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'edit',
      payload: todoId
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ( {todos.length} ) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
        {/* TodoList, todos, handleDelete, handleToggle */}
          <ul className={"list-group list-group-flush"}>
            {todos.map((todo, i) => {
              return (
                /* TodoListItem, todo, index, handleToggle, handleDelete */
                <li key={todo.id} className={"list-group-item"}>
                  <p className={`${ todo.done && 'complete' }`}
                    onClick={()=> handleToggle(todo.id)}
                  >
                    {i + 1}. {todo.desc}
                  </p>
                  <button
                    className={"btn btn-danger"}
                    onClick={()=>handleDelete(todo.id)}
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
                value={description}
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
