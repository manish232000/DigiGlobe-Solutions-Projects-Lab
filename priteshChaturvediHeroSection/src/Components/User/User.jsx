import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {userid}=useParams()
    return (
        <h2 className='text-center bg-gray-600 p-4 text-xl mx-40 text-white font-serif  '>
            User:{userid}
        </h2>
    )
}

export default User
