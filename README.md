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

### [In module](./doc/module.md)

## Publish

```bash
npm login
npm publish
```

## TODO

 * tester publish npm sur CD
 * module pour tester import de la lib
 * BONUS (tester import de la lib dans le core)

#### Limitation

convention de nomage pour `config/class-extends.js`

```js
module.exports = {
  '<base_path>__<version>': {
    version: <version>,
    filepath: <override_path>,
  }
};
```
