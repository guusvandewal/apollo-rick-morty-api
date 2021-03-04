import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div className="grid__flex">
        <img
          className="grid__img"
          src={this.props.image}
          alt={this.props.name}
          title={this.props.name}
        />
        {
          <p className="grid__name">
            {this.props.name} <br />
            <span>{this.props.episode}</span>{' '}
          </p>
        }
      </div>
    )
  }
}

export default Link
