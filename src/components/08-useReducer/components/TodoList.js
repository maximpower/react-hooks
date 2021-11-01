import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({todos, ...props}) => {
    return (
        <ul className={"list-group list-group-flush"}>
            {todos.map((todo, i) => {
              return (
                /* TodoListItem, todo, index, handleToggle, handleDelete */
                <TodoListItem {...props} todo={todo} index={i} />
              );
            })}
          </ul>
    )
}
