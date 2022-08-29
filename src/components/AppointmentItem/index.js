import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, staredAppoint} = props
  const {title, date, isStared, id} = appointmentDetails

  const onisStared = () => {
    staredAppoint(id)
  }

  const activeStar = isStared
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment">
      <div className="details">
        <p className="title-head">{title}</p>
        <p className="appoin-date">{date}</p>
      </div>
      <button
        type="button"
        className="star-btn"
        onClick={onisStared}
        testid="star"
      >
        <img src={activeStar} className="star" alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
