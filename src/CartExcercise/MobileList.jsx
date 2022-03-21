import React, { Component } from "react";
import MobileItem from "./MobileItem";

export default class MobileList extends Component {
  render() {
    return (
      <div className="row">
        {this.props.mobileList?.map((mobileItem, index) => {
          return (
            <MobileItem
              mobileItem={mobileItem}
              key={index}
              handleShowDetailProduct={this.props.handleShowDetailProduct}
              handleAddToCart={this.props.handleAddToCart}
            />
          );
        })}
      </div>
    );
  }
}
