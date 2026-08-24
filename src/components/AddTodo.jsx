import { useState, useContext } from "react";
import { TodoContext } from "../App";
import styles from "./styles/AddTodo.module.css";

const AddTodo = () => {
    const [text,setText] = useState("");
    const {addTodo} = useContext(TodoContext);

    const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText(""); // Reset input field after adding
  };
  return (
    <div className={styles.todo}>
        
      <input
        type="text"
        value={text}
        placeholder="Todo..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Legg til</button>
    </div>
  )
}

export default AddTodo


// AddTodo
// Et input-felt
// En knapp: "Legg til"
// Kaller addTodo() fra context