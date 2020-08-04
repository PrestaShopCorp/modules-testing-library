## Installation

```bash
yarn add xxxx
```

## Usage

for override test

respect format

```js
const RetroCompatResolver = require('xxxx/kernel/resolvers/RetroCompatResolver');

const version = '1.7.7.0';
const retroCompatResolver = new RetroCompatResolver(version, 'tralala.js');
const loginPage = retroCompatResolver.require('kernel/common/BO/login');

describe('toto', async () => {

  it('titi', async () => {
    await loginPage...
  });
})
```
