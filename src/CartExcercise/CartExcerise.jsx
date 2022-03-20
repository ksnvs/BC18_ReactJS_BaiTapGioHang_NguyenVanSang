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

  handleAddToCart = () => {};
  //   renderMobileList = () => {
  //     console.log(this.state.mobileList);
  //     return this.state.mobileList?.map((mobileItem, index) => {
  //       return <MobileItem mobileItem={mobileItem} key={index} />;
  //     });
  //   };
  render() {
    return (
      <div className="container p-4">
        <ModalCart cart={this.state.cart} />
        <DetailProducts detailProduct={this.state.detailProduct} />
        <MobileList
          mobileList={this.state.mobileList}
          handleShowDetailProduct={this.handleShowDetailProduct}
        />
      </div>
    );
  }
}
