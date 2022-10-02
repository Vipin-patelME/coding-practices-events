// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvents, changedRegistationStatus} = props
  const {imageUrl, name, location, registrationStatus} = eachEvents

  const onRegistration = () => {
    changedRegistationStatus(registrationStatus)
  }
  return (
    <li className="single-list">
      <button type="button" className="event-button">
        <img
          src={imageUrl}
          alt="event"
          onClick={onRegistration}
          className="event-image"
        />
      </button>
      <p className="events-head">{name}</p>
      <p className="events-para">{location}</p>
    </li>
  )
}
export default EventItem
