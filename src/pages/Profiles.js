import React, { useState } from 'react'
import '../components/css/profile.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Prmain from '../components/Prmain'
import Prside from '../components/Prside'

const employees = [
  {
    sname: 'NARUTO',
    name: 'uzumaki naruto',
    id: '00001',
    age: '17',
    position: 'Ninja',
    statue: 'Newbie',
    image: 'asset/boxchar1.png'
  },
  {
    sname: 'SHINTARO',
    name: 'SHINTARO KISARAGI',
    id: '00002',
    age: '18',
    position: 'Neet',
    statue: 'Newbie',
    image: 'asset/boxchar2.png'
  },
  {
    sname: 'AYANO',
    name: 'AYANO TATEYAMA',
    id: '00003',
    age: '18',
    position: 'Student',
    statue: 'Newbie',
    image: 'asset/boxchar3.jpg'
  },
  {
    sname: 'SHINOBU',
    name: 'SHINOBU OSHINO',
    id: '00004',
    age: '598',
    position: 'Vampire',
    statue: 'Newbie',
    image: 'asset/boxchar4.jpg'
  },
  {
    sname: 'Ryūko',
    name: 'Ryūko Matoi',
    id: '00005',
    age: '17',
    position: 'Student',
    statue: 'Newbie',
    image: 'asset/boxchar5.jpg'
  }
]

function Profiles () {
  const [selection, setSelection] = useState(0)

  return (
    <>
      <div className='containerP'>
        <Nav />
        <Prside setSelection={setSelection}/>
        <Prmain sname={employees[selection].sname} name={employees[selection].name} id={employees[selection].id} age={employees[selection].age} position={employees[selection].position} status={employees[selection].statue} image={employees[selection].image}/>
        <Footer />
      </div>
    </>
  )
}



export default Profiles
