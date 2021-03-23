import React, { Component } from 'react'

export default class Toggle extends Component {
  constructor() {
    super();
    this.state = {isToggleOn: true};
  }

  handleClick = (event) => {
    this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}))

    if (this.state.isToggleOn) {
      this.props.stop();

    } else {
      this.props.start();

    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "Stop" : "Start"}
        </button>
      </div>
    )
  }
}
