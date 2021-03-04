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
        {/*<p className="small" >{this.props.location.dimension} </p>*/}
      </div>
    )
  }
}

export default Link
