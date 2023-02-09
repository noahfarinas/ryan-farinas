import React, { useState } from 'react'
import Films from './Films'
import Info from './Info'
import Stills from './Stills'
import Contact from './Contact'
import Navigation from './Navigation'

const Content = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [showFilms, setShowFilms] = useState(true);
    const [showStills, setShowStills] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="main-content">
            <div className="main-container">
                <div className="nav">
                <Navigation setShowInfo={setShowInfo} setShowFilms={setShowFilms} setShowStills={setShowStills} setShowContact={setShowContact} />

                </div>
                <div className="mains">
                    {showInfo && <Info />}
                    {showFilms && <Films />}
                    {showStills && <Stills />}
                    {showContact && <Contact />}
                </div>
            </div>
        </div>
    )
}

export default Content
