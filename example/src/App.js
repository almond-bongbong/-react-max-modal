import React, { useState } from 'react'
import Modal from '@max/modal'

function App() {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  }

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div>
      <button type="button" onClick={openModal}>Open modal</button>
      <Modal visible={visible} onClose={closeModal}>
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
      </Modal>
    </div>
  );
}

export default App;
