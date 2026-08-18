import { useState, createContext, useContext } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ThemeProvider from "./components/ThemeSwitcher"
import ThemeSwitcher from "./components/ThemeSwitcher";


export const TodoContext = createContext();
export const ThemeContext =  createContext();


const App = () => {
  const [theme,setTheme] = useState("light");
  const [todos,setTodos] = useState([]);

  const toggleTheme= ()=>{
setTheme((prev)=> (prev === "light"?"dark":"light"));
  }

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

 const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };


  
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
      <div>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
<ThemeSwitcher  />
      </ThemeContext.Provider>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default App;
