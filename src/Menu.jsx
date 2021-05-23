import React from 'react'
import {Link} from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Link to="/">
                <button>About Us</button>
            </Link>
            <Link to="/contact">
                <button>Contact Us</button>
            </Link>
        </div>
    )
}

export default Menu
