import { useContext } from "react";
import {ThemeContext} from "../App";
import styles from "./styles/ThemeSwitcher.module.css"


const ThemeSwitcher = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div className={styles.container}>
        <h1>Gjeldende tema: {theme}</h1>
        <button onClick={toggleTheme}>Bytt tema</button>
    </div>
  )
}

export default ThemeSwitcher