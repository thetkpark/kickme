import React from 'react'
import './css/profile.css'
import daiImg from '../components/asset/boxchar1.png'
function Prmain() {
    return (
        <>
            <div id="mainP">
          
            <div className="popup center">
                <div className="icon">
                    <i className="fas fa-envelope-open"></i>
                </div>
                
                <div className="title">
                    Notification
                </div>
                <div className="describe">
                    <div className="cbox">
                        hello ayo
                    </div>
                </div>
                <div className="dismiss-btn">
                    <button id="dismiss-btn"><i className="fas fa-times-circle"></i></button>
                </div>
            </div>
            
           

            <div className="welcome">
                
                <div className="display">
                    <h5><span>NAME:</span><span id="fname"> uzumaki naruto</span></h5>
                    <h5><span>ID:</span><span id="id"> 00001</span></h5>
                    
                </div>
                <div className="info">
                    <h1 id="name">NARUTO</h1>
                    <h5><span>AGE:</span><span id="age"> 17</span></h5>
                    <h5><span>POSITION:</span><span id="pos"> Ninja</span></h5>
                    <h5><span>STATUS:</span><span id="status"> Newbie</span></h5>
                    <br/>
                    <h4>[TASK]</h4>
                    <h5><span>WORKING:</span> 0 <a href="#" id="showwork">show</a></h5>
                    <h5><span>COMPLETE:</span> 0 <a href="#" id="showcompleted">show</a></h5>
                    <h5><span>REPORT HISTORY:</span> 0 <a href="#" id="showreport">show</a></h5>
                    <br/>
                    <h4>[CONTACT]</h4>
                    <div className="contactlistP">
                        <a href="#github"><i className="fab fa-github-square"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram-square"></i></a>
                        <a href="#facebook"><i className="fab fa-facebook-square"></i></a> 
                    </div>
                </div>
                
            </div>
            
            <div className="daily" id="daily">
                <img id="daiImg" src={daiImg}/>
            </div>
      
            </div>
        </>
    )
}

export default Prmain
