import React from "react";
import "./style.css";
// TODO: Add Styles

function Scoreboard(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="title">
                    <a href="/">Star Wars Clicky Game!</a>
                </li>
                <li className="status">The force is strong in you!</li>
            </ul>
        </nav>
    )
}

export default Scoreboard;