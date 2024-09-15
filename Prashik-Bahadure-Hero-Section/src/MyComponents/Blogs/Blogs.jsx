import React from 'react'
import './Blogs.css'

// import myImage from './logo.png';
import myImage from '../../Assets/logo.png';

const Blogs = () => {
    return (
        <div id='blog'>
            <div id="innerB">
                <div id="Blogs">
                    <img src={myImage} alt="" />
                    <h2>Animals</h2>
                    <p>2022-06-13 | By Prashik</p>
                    <a href="#" target='_blanck' >Experience form user</a>
                </div>
                <div id="Blogs">
                    <img src={myImage} alt="" />
                    <h2>Animals</h2>
                    <p>2022-06-13 | By Prashik</p>
                    <a href="#" target='_blanck' >Experience form user</a>
                </div>
            </div>
        </div>
    )
}

export default Blogs