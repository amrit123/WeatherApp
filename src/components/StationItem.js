import React, { Component } from 'react'
import moment from "moment";

export default class StationItem extends Component {
  render() {
    const { external_id, name, latitude, longitude, altitude, updated_at } = this.props;

    return (
      <div className="station-item">
        <p>External ID:{external_id}</p>
        <p>Station Name:{name.toUpperCase()}</p>
        <p>Co-ordinates:[ {latitude} , {longitude} ]</p>
        <p>Altitude:{altitude} (meter from sea level)</p>
        <p>Created At:{moment(updated_at).format("MMMM Do, YYYY")}</p>
      </div>
    )
  }
}
