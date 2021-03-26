import React, { Component } from 'react'
import './css/profile.css'
import { popEm } from './js/jsfnc'
import Notipopup from './Notipopup'
// import daiImg from '../components/asset/boxchar1.png'

// function Prmain({sname,name, id, age, position, status, image}) {

// }

class Prmain extends React.Component {
  constructor ({ sname, name, id, age, position, status, image }) {
    super()
    this.sname = sname
    this.name = name
    this.id = id
    this.age =age
    this.position = position
    this.status =status
    this.image = image
  }
  
  
  componentDidMount = () => {
    popEm()
  }
  render () {
    return (
      <>
      
        <div id='mainP'>
           
           <Notipopup/>
          <div className='welcome'>
            <div className='display'>
              <h5>
                <span>NAME:</span>
                <span id='fname'>{this.name}</span>
              </h5>
              <h5>
                <span>ID:</span>
                <span id='id'>{this.id}</span>
              </h5>
            </div>
            <div className='info'>
              <h1 id='name'>{this.sname}</h1>
              <h5>
                <span>AGE:</span>
                <span id='age'>{this.age}</span>
              </h5>
              <h5>
                <span>POSITION:</span>
                <span id='pos'>{this.position}</span>
              </h5>
              <h5>
                <span>STATUS:</span>
                <span id='status'>{this.status}</span>
              </h5>
              <br />
              <h4>[TASK]</h4>
              <h5>
                <span>WORKING:</span> 0{' '}
                <a href='#' id='showwork'>
                  show
                </a>
              </h5>
              <h5>
                <span>COMPLETE:</span> 0{' '}
                <a href='#' id='showcompleted'>
                  show
                </a>
              </h5>
              <h5>
                <span>REPORT HISTORY:</span> 0{' '}
                <a href='#' id='showreport'>
                  show
                </a>
              </h5>
              <br />
              <h4>[CONTACT]</h4>
              <div className='contactlistP'>
                <a href='#github'>
                  <i className='fab fa-github-square'></i>
                </a>
                <a href='#instagram'>
                  <i className='fab fa-instagram-square'></i>
                </a>
                <a href='#facebook'>
                  <i className='fab fa-facebook-square'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='daily' id='daily'>
            <img id='daiImg' src={this.image} />
          </div>
        </div>
      </>
    )
  }
}

export default Prmain
