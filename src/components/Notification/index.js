/* eslint-disable react/destructuring-assignment */
// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => (
  <>
    <div className="notification-card">
      <div className="icon">{props.children[0]}</div>
      <div className="description">
        {props.children[1]}
        {props.children[2]}
      </div>
      <div className="wrong-icon">
        <GrFormClose />
      </div>
    </div>
  </>
)

export default Notification
