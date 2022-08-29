import {Component} from 'react'
import {format} from 'date-fns'
import './index.css'

class Appointments extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-details">
            <div className="details-container">
              <h1 className="heading">Appointment</h1>
              <p className="title">TITLE</p>
              <input type="text" className="input" placeholder="Title" />
              <p className="title">DATE</p>
              <input type="date" className="input" />
              <button type="button" className="button">
                Add
              </button>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="all-appointments">
            <h1 className="side-heading">Appointments</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
