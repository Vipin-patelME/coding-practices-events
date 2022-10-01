// Write your code here
import './index.css'

const EventItem = props => {
  const {eachEvents} = props
  const {imageUrl, name, location} = eachEvents

  const onRegistration = () => {}
  return (
    <li className="single-list">
      <img
        src={imageUrl}
        alt={name}
        onClick={onRegistration}
        className="event-image"
      />
      <h1 className="events-head">{name}</h1>
      <p className="events-para">{location}</p>
    </li>
  )
}
export default EventItem
