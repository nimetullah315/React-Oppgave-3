import { useContext, useState } from "react";
import { TodoContext } from "../App";

const TodoList = () => {
    const { todos, toggleTodo, removeTodo } = useContext(TodoContext);
    const [isChecked,setIsChecked] = useState(false);
  
    return (
   <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.done ? "line-through" : "none" }}
        >
        <input type="checkbox" onChange={() => toggleTodo(todo.id)}  />
            {todo.text}
          
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList

// For hver todo:
// En checkbox som bruker toggleTodo(id)
// Tekst som viser todoen
// En knapp: "X" som bruker removeTodo(id)