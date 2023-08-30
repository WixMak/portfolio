import React from 'react'
import { NavLink } from "react-router-dom"
import { Typography } from "antd";

import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="intro-card">
                <Typography.Text>Name:Wix Mak</Typography.Text>
                <Typography.Text>makwaiyeung@hotmail.com | Southbank | +61 (0) 450250848</Typography.Text>


            </div>
            <ul className="nav-btn-group">
                <li>
                    <NavLink to="/about">
                        <div style={{padding:15}}>
                            <Typography.Text>
                                About
                            </Typography.Text>
                        </div>

                    </NavLink>
                </li>
                <li>
                    <NavLink to="/exp">
                        <div style={{padding:15}}>
                            <Typography.Text>
                                Experience
                            </Typography.Text>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills">
                        <div style={{padding:15}}>
                            <Typography.Text>
                                Skills
                            </Typography.Text>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/info">
                        <div style={{padding:15}}>
                            <Typography.Text>
                                More info
                            </Typography.Text>
                        </div>
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}
