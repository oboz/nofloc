# nofloc
Middleware to block Google FLoC tracking in Express or Koa

## Install

Run `npm install nofloc --save` to add package.

## Usage for Express
```js
const { noflocExpress } = require("nofloc");

// some code...

app.use(noflocExpress());
```

## Usage for Koa
```js
const { noflocKoa } = require("nofloc");

// some code...

app.use(noflocKoa());
```


