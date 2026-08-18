import { useContext } from "react";
import {ThemeContext} from "../App";



const ThemeSwitcher = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div>
        <h1>Gjeldende tema: {theme}</h1>
        <button onClick={toggleTheme}>Bytt tema</button>
    </div>
  )
}

export default ThemeSwitcher