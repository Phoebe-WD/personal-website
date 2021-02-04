import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="Header">
            <nav className="nav-menu">
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/">ABOUT ME</a>
                    </li>
                    <li>
                        <a href="/">PROJECTS</a>
                    </li>
                    <li>
                        <a href="/">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}