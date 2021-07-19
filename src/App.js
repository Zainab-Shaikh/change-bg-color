import { useState } from "react";
import styles from "./style.module.css";
function App() {
  let [new_color, setColor] = useState("black");

  function changeColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor((new_color = `#${randomColor}`));
    console.log(new_color);
  }
  return (
    <section
      style={{ backgroundColor: `${new_color}` }}
      className={styles.container}
    >
      <button onClick={changeColor}>Submit</button>
    </section>
  );
}

export default App;
