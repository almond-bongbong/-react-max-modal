# @react-max/modal

> React modal dialogs. ⚛️

[![NPM](https://img.shields.io/npm/v/@react-max/modal.svg)](https://www.npmjs.com/package/@react-max/modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
> For support for react <16.8
```bash
# If you use npm:
npm install --save @react-max/modal

# Or if you use Yarn:
yarn add @react-max/modal
```


## Usage

```tsx
import React, { Fragment, useState } from 'react'
import Modal from '@react-max/modal'

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
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
    </Fragment>
  );
}
```

[Live Demo](https://almond-bongbong.github.io/-react-max-modal/)

## Props

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| visible | `boolean` | `false` | |
| children | `ReactNode` | | |
| onClose | `() => void` | | |
| title | `ReactNode` | | |
| width | `number | string` | `520` | |
| zIndex | `number` | `1000` | |
| mask | `boolean` | `true` | |
| closeButton | `ReactNode` | | |
| showsCloseButton | `boolean` | `true` | |
| isMaskClosable | `boolean` | `true` | |
| isEscKeyClosable | `boolean` | `true` | |
| isCenteredMode | `boolean` | `false` | |
| isExpandedMode | `boolean` | `false` | |
| modalClassName | `string` | | |
| maskClassName | `string` | | |
| bodyClassName | `string` | | |
| contentClassName | `string` | | |
| modalStyle | `CSSProperties` | | |
| maskStyle | `CSSProperties` | | |
| bodyStyle | `CSSProperties` | | |
| contentStyle | `CSSProperties` | | |

## Thanks
Support it by joining __[stargazers](https://github.com/almond-bongbong/-react-max-modal/stargazers)__ for this repository. :star:


## License
MIT © [almond-bongbong](https://github.com/almond-bongbong)
