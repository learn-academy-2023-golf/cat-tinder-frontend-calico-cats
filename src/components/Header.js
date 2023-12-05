import React from 'react'
import catLogo from '../assets/icons8-cat-100.png'
import Home from '../pages/Home'
import CatNew from '../pages/CatNew'
import CatShow from '../pages/CatShow'
import CatIndex from '../pages/CatIndex'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className='Header'>
                <img className='catLogo'src={catLogo} />
                <Link to="/"><h2>WHISKERS</h2></Link>
                <Link to="/catindex"><h2>Browse Cats</h2></Link>
                <Link to="/catshow"><h2>Find Cat</h2></Link>
                <Link to="/catnew"><h2>Create Profile</h2></Link>
            </div>
        </>
    )
}
export default Header