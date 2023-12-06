import React from 'react'
import { useParams } from 'react-router-dom'

const CatShow = ( { cats }) => {
    const { id } = useParams()
    let currentCat = cats.find((cat) => cat.id === +id)
    return (
        <div className='catShow-styling'>
            {currentCat && (
                <>
                    <h2>I am {currentCat.name}, age {currentCat.age}.</h2>
                    <h3>I enjoy {currentCat.enjoys}</h3>
                    <img alt={currentCat.name} src={currentCat.image}/>
                </>
            )}
        </div>
    )
}
export default CatShow