import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <div className="item">
        <img
          src={"./img/products/" + this.props.item.img}
          alt=""
          onClick={() => this.props.onShowFullItem(this.props.item)}
        />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.descr}</p>
        <b>{this.props.item.price}$</b>
        <button
          className="add-to-cart"
          onClick={() => this.props.onAdd(this.props.item)}
        >
          +
        </button>
      </div>
    );
  }
}

export default Item;
