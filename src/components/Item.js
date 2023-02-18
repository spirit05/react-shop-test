import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/products/" + this.props.item.img} alt="" />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descr}</p>
        <b>{this.props.item.price}$</b>
        <button className="add-to-cart">+</button>
      </div>
    );
  }
}

export default Item;
