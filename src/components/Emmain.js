import React from 'react'
// import '../components/css/emprostyle.css'
function Emmain () {
  return (
    <>
      <div id="mainEm">
        <div className='popup center'>
          <div className='icon'>
            <i className='fas fa-envelope-open'></i>
          </div>

          <div className='title'>Notification</div>
          <div className='describe'>
            <div className='cbox'>hello ayo</div>
          </div>
          <div className='dismiss-btn'>
            <button id='dismiss-btn'>
              <i className='fas fa-times-circle'></i>
            </button>
          </div>
        </div>

        <div className='profileDisplay'>
          <div className='profilePic'></div>
          <div className='profileInfo'>
            <h3>RYŪKO MATOI</h3>

            <div className='contactlist'>
              <p>contact</p>
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
        <div className='profileTab'>
          <div className='tab'>
            <button
              className='tablinks'
              onclick="openCity(event, 'Information')"
              id='InfoTab'
            >
              Information
            </button>
            <button
              className='tablinks'
              onclick="openCity(event, 'Scheduling')"
              id='ScheTab'
            >
              Scheduling
            </button>
            <button
              className='tablinks'
              onclick="openCity(event, 'Task')"
              id='TaskTab'
            >
              Task
            </button>
          </div>

          <div id='Information' className='tabcontent'>
            <div className='Basic'>
              <h3>Basic Information</h3>
              <p>
                <span>First Name: </span>
              </p>
              <p>
                <span>Last Name: </span>
              </p>
              <p>
                <span>Nationality: </span>
              </p>
              <p>
                <span>Date of Birth: </span>
              </p>
            </div>
            <div className='Company'>
              <h3>Company Information</h3>
              <p>
                <span>Role: </span>
              </p>
              <p>
                <span>Team: </span>
              </p>
              <p>
                <span>Status: </span>
              </p>
              <p>
                <span>Employment Type: </span>
              </p>
            </div>
            <div className='Others'>
              <h3>Coming soon</h3>
            </div>
          </div>

          <div id='Scheduling' className='tabcontent'>
            <h3>Schedule</h3>
            <div className='calen'>
              <iframe src='https://calendar.google.com/calendar/embed?src=t6mf52ff4krinh3im9adbtunv0%40group.calendar.google.com&ctz=Asia%2FBangkok'></iframe>
            </div>
          </div>

          <div id='Task' className='tabcontent'>
            <h3>Task</h3>
            <p>
              <input
                type='checkbox'
                name=''
                id=''
                onclick='return false;'
                checked
              />
              Senketsu
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Emmain
