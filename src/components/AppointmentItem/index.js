import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {title, date, isStared} = appointmentDetails

  const activeStar = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment">
      <div className="details">
        <h1 className="title-head">{title}</h1>
        <p className="appoin-date">{date}</p>
      </div>
      <button type="button" className="star-btn">
        <img src={activeStar} className="star" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
