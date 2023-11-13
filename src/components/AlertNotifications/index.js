// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <>
    <div className="alert-notifications-page">
      <h1>Alert Notifications</h1>
      <Notification>
        <AiFillCheckCircle color="#2dca73" size="22" />
        <h2 className="card-title success">Success</h2>
        <p>You can access all the files in the folder</p>
      </Notification>
      <Notification>
        <RiErrorWarningFill color="#ff0b37" size="22" />
        <h2 className="card-title error">Error</h2>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </Notification>
      <Notification>
        <MdWarning color="#ffb800" size="22" />
        <h2 className="card-title warning">Warning</h2>
        <p>Viewers of this file can see comments and suggestions</p>
      </Notification>
      <Notification>
        <MdInfo color="#0f81e0" size="22" />
        <h2 className="card-title info">Info</h2>
        <p>Anyone on the internet can view these files</p>
      </Notification>
    </div>
  </>
)

export default AlertNotifications
