
import {useEffect, useState} from "react"

import './Navbar.css'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // useEffect(()=>{
    //     alert("This is a demo project. We are working on it.")
    // },[]);
    // useEffect(()=>{
    //     alert("This is a demo project. The dark mode toggle is not functional yet.")
    // },[toggle]);
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