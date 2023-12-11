import React from 'react'
import catLogo from '../assets/icons8-cat-100.png'
import Home from '../pages/Home'
import CatNew from '../pages/CatNew'
import CatShow from '../pages/CatShow'
import CatIndex from '../pages/CatIndex'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='Header'>
                <img className='catLogo'src={catLogo} />
                <NavLink className="nav-link" to="/">WHISKERS</NavLink>
                <NavLink className="nav-link" to="/catindex">Browse Cats</NavLink>
                <NavLink className="nav-link" to="/catnew">Create Profile</NavLink>
            </div>
        </>
    )
}
export default Header