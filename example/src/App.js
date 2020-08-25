import React, { useState } from 'react'
import Modal from '@max/modal'

function App() {
  const [show, setShow] = useState(false);

  const handleModal = () => {
    setShow(true);
  }

  return (
    <div>
      <button type="button" onClick={handleModal}>Open modal</button>
      <Modal show={show}>
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
      </Modal>
    </div>
  );
}

export default App;
