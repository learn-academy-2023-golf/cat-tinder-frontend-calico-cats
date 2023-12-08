import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const CatShow = ( { cats }) => {
    const { id } = useParams()
    let currentCat = cats.find((cat) => cat.id === +id)
    return (
        <div className='CatShow'>
            {currentCat && (
                <>
                    <h2>I am {currentCat.name}, age {currentCat.age}.</h2>
                    <h3>I enjoy {currentCat.enjoys}</h3>
                    <img alt={currentCat.name} src={currentCat.image}/>
                    <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
                        Edit Profile
                    </NavLink>
                </>
            )}
        </div>
    )
}
export default CatShow