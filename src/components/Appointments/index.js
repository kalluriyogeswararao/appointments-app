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

  staredAppoint = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppoint => {
        if (id === eachAppoint.id) {
          return {...eachAppoint, isStared: !eachAppoint.isStared}
        }
        return eachAppoint
      }),
    }))
  }

  onStaredAppoints = () => {
    this.setState(prevState => ({isStar: !prevState.isStar}))
  }

  render() {
    const {appointmentList, isStar, title, date} = this.state
    const filteredProjects = appointmentList.filter(
      each => each.isStared === true,
    )
    const finalList = isStar ? filteredProjects : appointmentList
    const activeBtn = isStar ? 'stared-btn' : 'normal-btn'
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-details">
            <form onSubmit={this.addAppointment} className="details-container">
              <h1 className="heading">Add Appointment</h1>
              <label className="title" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                className="input"
                placeholder="Title"
                onChange={this.onChangeTitle}
                value={title}
                id="title"
              />
              <label className="title" htmlFor="date">
                DATE
              </label>
              <input
                type="date"
                className="input"
                onChange={this.onChangeDate}
                value={date}
                id="date"
              />
              <button type="submit" className="button" testid="star">
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
              <button
                type="button"
                className={activeBtn}
                onClick={this.onStaredAppoints}
              >
                Starred
              </button>
            </div>
            <ul className="all-appoints">
              {finalList.map(eachAppointment => (
                <AppointmentItem
                  appointmentDetails={eachAppointment}
                  key={eachAppointment.id}
                  staredAppoint={this.staredAppoint}
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
