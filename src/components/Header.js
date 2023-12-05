import React from 'react'
import catLogo from '../assets/icons8-cat-100.png'
import Home from '../pages/Home'
import CatNew from '../pages/CatNew'
import CatShow from '../pages/CatShow'
import CatIndex from '../pages/CatIndex'

const Header = () => {
    return (
        <>
            <div className='Header'>
                <img className='catLogo'src={catLogo} />
                <h2>WHISKERS</h2>
                <h2>Browse Cats</h2>
                <h2>Find Cat</h2>
                <h2>Create Profile</h2>
            </div>
        </>
    )
}
export default Header