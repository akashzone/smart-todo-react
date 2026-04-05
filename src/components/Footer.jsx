import React from 'react'
import './Footer.css'
const Footer = ({ toggle }) => {
    return (
        <div className='footer' style={{ backgroundColor: toggle ? "#f9f9f9" : "#1a1a1a", color: toggle ? "#000" : "#e0e0e0", borderTop: `1px solid ${toggle ? "#ccc" : "#555"}`, boxShadow: `0 2px 5px ${toggle ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)"}` }}>
            <span >Copyright &copy; 2026 Smart Todo. All rights reserved.</span>
        </div>
    )
}

export default Footer