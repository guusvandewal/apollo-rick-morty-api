import React, { Component } from 'react'

class Link extends Component {
  render() {
    const { image, name, episode } = this.props;
    return (
      <div className="grid__flex">
        <img
          className="grid__img"
          src={image}
          alt={name}
          title={name}
        />
        {
          <p className="grid__name">
            {name} <br />
            <span>{episode}</span>{' '}
          </p>
        }
      </div>
    )
  }
}

export default Link
