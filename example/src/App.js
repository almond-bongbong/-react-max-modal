import React, { useState } from 'react'
import Modal from '@max/modal'

function App() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setVisible1(true)}>Open modal</button>
      <button type="button" onClick={() => setVisible2(true)}>Open long content modal</button>

      <Modal title="Warning" visible={visible1} onClose={() => setVisible1(false)}>
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
      </Modal>
      <Modal title="Warning" visible={visible2} onClose={() => setVisible2(false)}>
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
        Hello, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid doloremque eum illum magnam maiores neque pariatur quis quisquam quod quos, rerum sint, unde. Animi expedita fuga odio quae temporibus.
      </Modal>
    </div>
  );
}

export default App;
