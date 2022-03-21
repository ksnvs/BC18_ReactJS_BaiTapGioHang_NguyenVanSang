import React, { Component } from "react";
import DetailProducts from "./DetailProducts";
import MobileList from "./MobileList";
import ModalCart from "./ModalCart";
import { dataCart } from "../data/data";

export default class CartExcerise extends Component {
  state = {
    mobileList: dataCart,
    detailProduct: dataCart[0],
    cart: [],
  };

  handleShowDetailProduct = (value) => {
    this.setState({ detailProduct: value });
  };

  handleAddToCart = (value) => {
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === value.id;
    });
    if (index === -1) {
      let newObject = { ...value, quantity: 1 };
      cloneCart.push(newObject);
    } else {
      cloneCart[index].quantity++;
    }
    this.setState({ cart: cloneCart });
  };

  handleChangeQuantity = (id) => {
    let realId = id < 0 ? id * -1 : id;
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === realId;
    });

    id > 0 && index !== -1 && cloneCart[index].quantity++;
    id < 0 &&
      index !== -1 &&
      cloneCart[index].quantity-- &&
      cloneCart[index].quantity === 0 &&
      cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div className="container p-4">
        <ModalCart
          cart={this.state.cart}
          handleChangeQuantity={this.handleChangeQuantity}
        />
        <DetailProducts detailProduct={this.state.detailProduct} />
        <MobileList
          mobileList={this.state.mobileList}
          handleShowDetailProduct={this.handleShowDetailProduct}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}
