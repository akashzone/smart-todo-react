

import './Navbar.css'
const Navbar = ({toggle,setToggle}) => {
    

    return <>
    <nav className="navbar" style={{backgroundColor: toggle ? "#f5f5f5" : "#333", color: toggle ? "#000" : "#fff", borderBottom: `1px solid ${toggle ? "#ccc" : "#555"}`, boxShadow: `0 2px 5px ${toggle ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"}`}}>
        <div className="navTitle">
            Smart <span>Todo</span>
        </div>
        <div className="toggle">
            <button className="toggleBtn"
            style={{backgroundColor: toggle ? "#f5f5f5" : "#333", color: toggle ? "#000" : "#fff", border: `1px solid ${toggle ? "#000" : "#fff"}`,padding: `10px 20px`, borderRadius: `5px`}}
            onClick={()=>{
                setToggle(!toggle);
            }}
            >{toggle ? "Light" : "Dark"}</button>
        </div>
    </nav>
    </>
}

export default Navbar