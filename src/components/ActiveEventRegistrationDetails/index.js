// Write your code here
// Write your code here
import './index.css'

const registrationStatus = {
  pending: 'YET_TO_REGISTER',
  done: 'REGISTERED',
  finished: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  switch (status) {
    case registrationStatus.pending:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="yet-to-register-image"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="register-button">
            Register Here
          </button>
        </>
      )
    case registrationStatus.done:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registered-image"
          />
          <h1 className="registerd-para">
            You have already registered for the event
          </h1>
        </>
      )
    case registrationStatus.finished:
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="closed-image"
          />
          <h1 className="registerd-para">Registrations Are Closed Now!</h1>
          <p className="finished-para">Stay tuned. We will reopen</p>
        </>
      )
    default:
      return <p>Click on an event, to view its registration details</p>
  }
}

export default ActiveEventRegistrationDetails
