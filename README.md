# @max/modal

> 🔥 React modal dialogs.

[![NPM](https://img.shields.io/npm/v/@max/modal.svg)](https://www.npmjs.com/package/@max/modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @max/modal
```
or
```bash
yarn add @max/modal
```

> 🎯 For support for react <16.8

## Usage

```tsx
import React, { useState } from 'react'
import Modal from '@max/modal'

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setVisible(true)}>
        open modal
      </button>

      <Modal
        title="Modal"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        contents
      </Modal>
    </>
  );
}
```

## License

MIT © [almond-bongbong](https://github.com/almond-bongbong)
