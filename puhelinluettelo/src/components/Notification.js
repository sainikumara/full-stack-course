import React from 'react';

const Notification = (props) => {
  if (props.message === null) {
    return null
  } else {
    return (
      <div className="onnistuminen">
        {props.message}
      </div>
    )
  }
}

export default Notification 