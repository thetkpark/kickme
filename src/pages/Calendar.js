import React from 'react'
import CalenMain from '../components/CalenMain'
import Calenside from '../components/Calenside'
import '../components/css/calendar.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
function Calendar() {
    return (
        <>
            <div className="containerCalen">
                <Nav/>
                <Calenside/>
                <CalenMain/>
                <Footer/>
            </div>
        </>
    )
}

export default Calendar
