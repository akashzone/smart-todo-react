
import {useState} from "react"

import './Navbar.css'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return <>
    <nav className="navbar">
        <div className="navTitle">
            Smart <span>Todo</span>
        </div>
        <div className="toggle">
            <button className="toggleBtn"
            onClick={()=>{
                setToggle(!toggle);
            }}
            >{toggle ? "Light" : "Dark"}</button>
        </div>
    </nav>
    </>
}

export default Navbar