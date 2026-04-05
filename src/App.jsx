import { useState } from "react"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import TodoList from "./components/TodoList"

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="app" style={{ height: "100vh", backgroundColor: toggle ? "#f9f9f9" : "#1a1a1a", color: toggle ? "#000" : "#e0e0e0" }}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <TodoList toggle={toggle} />
      <Footer toggle={toggle}  />

    </div>
  )
}

export default App
