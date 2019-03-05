import React from "react";

class Weather extends React.Component {
  render() {
    return <div>
    { this.props.temperature }
      </div>
  }
}

export default Weather;
