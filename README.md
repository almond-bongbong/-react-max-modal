# @max/modal

> React modal dialogs. ⚛️

[![NPM](https://img.shields.io/npm/v/@max/modal.svg)](https://www.npmjs.com/package/@max/modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# If you use npm:
npm install --save @max/modal

# Or if you use Yarn:
yarn add @max/modal
```

> For support for react <16.8

[Live Demo](https://github.com/almond-bongbong)


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

## Props

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| visible | `boolean` | `false` | |
| children | `ReactNode` | | |
| onClose | `() => void` |  |  |
| title | `ReactNode` | | |
| width | `number \| string` | `520` | |
| zIndex | `number` | `1000` | |
| mask | `boolean` | `true` | |

## Thanks :heart:
Support it by joining __[stargazers](https://github.com/almond-bongbong/-max-modal/stargazers)__ for this repository. :star:


## License
MIT © [almond-bongbong](https://github.com/almond-bongbong)
