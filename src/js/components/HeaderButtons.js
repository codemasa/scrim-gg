import React from "react";
import {
  Popover,
  Modal,
  Tooltip,
  OverlayTrigger,
  Button,
  Dropdown,
  MenuItem
} from 'react-bootstrap';
import Icon from "react-icons-kit";

import {ic_notifications_none as notificationsIcon} from 'react-icons-kit/md/ic_notifications_none';
import {userCircle} from 'react-icons-kit/fa/userCircle';

import {Button as UIButton} from "semantic-ui-react";

export default class HeaderButtons extends React.Component {
  render() {
    return (<div>
      <Dropdown id="Notifications">
        <Dropdown.Toggle>
          <Icon icon={notificationsIcon} size="40px"/>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem>
            Notifications
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown id="UserProfile">
        <Dropdown.Toggle>
          <Icon icon={userCircle} size="40px"/>
          <p className="user-name">Name</p>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <MenuItem>
            User Profile
          </MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    </div>)
  }
}
