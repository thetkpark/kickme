import React, { useState } from 'react'
import '../components/css/profile.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Prmain from '../components/Prmain'
import Prside from '../components/Prside'

const employees = [
  {
    name: 'uzumaki naruto',
    id: '00001',
    age: '17',
    position: 'Ninja',
    statue: 'Newbie',
    image: 'asset/boxchar1.png'
  },
  {
    name: 'SHINTARO KISARAGI',
    id: '00002',
    age: '18',
    position: 'Neet',
    statue: 'Newbie',
    image: 'asset/boxchar2.png'
  }
]

function Profiles () {

  const [selection, setSelection] = useState(0)

  return (
    <>
      <div className='containerP'>
        <Nav />
        <Prside setSelection={setSelection}/>
        <Prmain name={employees[selection].name} id={employees[selection].id} age={employees[selection].age} position={employees[selection].position} status={employees[selection].statue} image={employees[selection].image}/>
        <Footer />
      </div>
    </>
  )
}



export default Profiles
