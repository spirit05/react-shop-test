import React, { Component } from "react";
import Item from "./Item";

class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item" onClick={() => this.props.onShowFullItem()}>
        <Item
          item={this.props.item}
          onAdd={this.props.onAdd}
          onShowFullItem={this.props.onShowFullItem}
        />
      </div>
    );
  }
}

export default ShowFullItem;
