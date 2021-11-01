import React from "react";
import { useForm } from "../../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;
    
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
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
    </>
  );
};
