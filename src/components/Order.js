import React, { Component } from "react";

class Order extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/products/" + this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
      </div>
    );
  }
}

export default Order;
