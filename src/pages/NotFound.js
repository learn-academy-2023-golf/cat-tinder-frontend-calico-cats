import React from 'react'
import catError from '../assets/cat404.png'

const NotFound = () => {
    return (
        <>
            <div className='NotFound'>
            <img className='catError'src={catError} />
            </div>
        </>
    )
}
export default NotFound