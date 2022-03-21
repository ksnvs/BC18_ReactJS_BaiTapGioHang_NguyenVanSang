import React, { Component } from "react";
import { Modal, Button } from "antd";

export default class ModalCart extends Component {
  state = {
    isModalVisible: false,
  };
  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  renderCartProduct = () => {
    console.log(this.props.cart);
    return this.props.cart.map((item, index) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>
            <img style={{ width: "100px" }} src={item.thumbnail_url} />
          </td>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id * -1);
              }}
              className="btn btn-danger mr-2"
            >
              -
            </button>
            {item.quantity}
            <button
              onClick={() => {
                this.props.handleChangeQuantity(item.id);
              }}
              className="btn btn-primary ml-2"
            >
              +
            </button>
          </td>
          <td>{item.price.toLocaleString()}</td>
          <td>{(item.quantity * item.price).toLocaleString()}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Giỏ hàng
        </Button>

        <Modal
          title="Giỏ hàng"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width={1200}
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩn</th>
                  <th>Hình</th>
                  <th>Tên</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Thành tiền</th>
                </tr>
              </thead>
              <tbody>{this.renderCartProduct()}</tbody>
            </table>
          </div>
        </Modal>
      </div>
    );
  }
}
