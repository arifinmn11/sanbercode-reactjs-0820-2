import React, { useContext } from 'react'
import { NavContext } from "./NavContext";
import {Link } from "react-router-dom";

const Nav = () => {
    const [navColor, setColorNav] = useContext(NavContext);
    const handlerChange = (e) => {
        e.preventDefault();
        if(e.target.value === "" || e.target.value === "black") {
            setColorNav({
                text: "black",
                color: "white",  
                thema: "light"
            });
        }else {
            setColorNav({
                text: "white",
                color: "black",
                thema: "dark"  
            });
        }
    }
    return (
        <div>
            <ul style={{backgroundColor: navColor.color }}>
                <li> <Link to="/tugas9" style={{color: navColor.text}}> Tugas 9 </Link> </li>
                <li> <Link to="/tugas10" style={{color: navColor.text}}> Tugas 10 </Link> </li>
                <li> <Link to="/tugas11" style={{color: navColor.text}}> Tugas 11 </Link> </li>
                <li> <Link to="/tugas12" style={{color: navColor.text}}> Tugas 12 </Link> </li>
                <li> <Link to="/tugas13" style={{color: navColor.text}}> Tugas 13 </Link> </li>
                <li> <Link to="/tugas14" style={{color: navColor.text}}> Tugas 14 </Link> </li>
                <li style={{padding: "14px 16px", textAlign: "right"}}> <button style={{backgroundColor: navColor.text, color: navColor.color}} onClick={handlerChange} value={navColor.color}> {navColor.thema === "light" ? "DARK" : "LIGHT"} </button> </li>
            </ul>
        </div>

    )
}

export default  Nav
