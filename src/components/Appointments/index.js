import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {appointmentList: [], title: '', date: '', isStar: false}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const dateTime = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const newAppointment = {
      id: uuidv4(),
      title,
      date: dateTime,
      isStared: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  render() {
    const {appointmentList, isStar, title, date} = this.state
    const activeBtn = isStar ? 'stared-btn' : 'normal-btn'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-details">
            <form onSubmit={this.addAppointment} className="details-container">
              <h1 className="heading">Appointment</h1>
              <p className="title">TITLE</p>
              <input
                type="text"
                className="input"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
              />
              <p className="title">DATE</p>
              <input
                type="date"
                className="input"
                onChange={this.onChangeDate}
                value={date}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <div className="all-appointments">
            <div className="head">
              <h1 className="side-heading">Appointments</h1>
              <button type="button" className={activeBtn}>
                Stared
              </button>
            </div>
            <ul className="all-appoints">
              {appointmentList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
