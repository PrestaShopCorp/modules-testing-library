# template-tests-modules

## Installation

```bash
yarn
docker-composer up -d
```

## Usage

### Standard lib

```bash
yarn start:test
```

## Publish

```bash
npm login
npm publish
```

[Unpublish](https://docs.npmjs.com/unpublishing-packages-from-the-registry)

#### Limitation

convention de nomage pour `config/class-extends.js`

```js
module.exports = {
  '<base_path>__<version>': {
    version: <version>,
    override: false, //optional
    filepath: <override_path>,
  }
};
```

Ide autocomplete
