import React, { Component } from "react";

export default class DetailProducts extends Component {
  render() {
    let { thumbnail_url, name, price } = this.props.detailProduct;
    return (
      <div className="row">
        <div className="my-5 row">
          <div className="col-3">
            <img style={{ width: "100%" }} src={thumbnail_url} alt="" />
          </div>
          <div className="col-7">
            <h4> {name}</h4>
            <p className="card-text text-danger">
              Price: {price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
