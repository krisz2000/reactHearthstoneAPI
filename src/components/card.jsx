import React, { Component } from "react";
import UpdateCard from "./updateCard";

class Card extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.card.name}</h1>
        <img src={this.props.card.img} alt="Card" />
        <p></p>
        <UpdateCard card={this.props.card} onUpdate={this.props.onUpdate} />
      </React.Fragment>
    );
  }
}

export default Card;
