# prestashop_test_lib

## Installation

```bash
yarn
docker-composer up -d
```

## Usage

Run units tests

```bash
yarn start:test:units
```

Run ui tests

```bash
yarn start:test:ui
```

Run all tests

```bash
yarn start:test
```

You can find an implementaion example on [prestashop_test_lib](https://github.com/PrestaShopCorp/prestashop_test_lib#readme)

## Publication

Publication is automatic when you tag repository git (git tag = npm version)

## Limitation

docker-compose run only on prestashop version < 1.7

Ide autocomplete
