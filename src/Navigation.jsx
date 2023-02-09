import React from 'react'
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
// import Films from './Films'

const Navigation = ({ setShowInfo, setShowFilms, setShowContact, setShowStills }) => {
    return (
        <div className="navigation">
            <div className="item-container">
                <div className="header"></div>
                <h1>
                    <strong>r.farinas</strong>
                </h1>
                <ul>
                    <a href="#" onClick={() => {setShowFilms(true);setShowInfo(false);setShowStills(false);setShowContact(false)}}><li>films</li></a>
                    <a href="#" onClick={() => {setShowFilms(false);setShowInfo(false);setShowStills(true);setShowContact(false)}}><li>stills</li></a>
                    <a href="#" onClick={() => {setShowFilms(false);setShowInfo(true);setShowStills(false);setShowContact(false)}}><li>info</li></a>
                    <a href="#" onClick={() => {setShowFilms(false);setShowInfo(false);setShowStills(false);setShowContact(true)}}> <li>contact</li></a>

                    <a href="https://www.youtube.com/user/ryanfarinas619" target="_blank"><li> <ion-icon name="logo-youtube"></ion-icon></li>
                    </a>

                    <a href="https://www.instagram.com/ryanfarinas/?hl=en" target="_blank">
                        <li> <ion-icon name="logo-instagram"></ion-icon></li></a>


                </ul>
            </div>
        </div>
    )
}


export default Navigation


