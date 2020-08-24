import React, { Component } from 'react'
import Modal from '@max/modal'

export default class App extends Component {
  state = {
    openModal: false,
  }

  handleModal = () => {
    this.setState({ openModal: true });
  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.handleModal}>Open modal</button>
        <Modal>
          Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        </Modal>
      </div>
    )
  }
}
