
# esbuild-plugin-frontend-errors

Shows esbuild errors directly in the browser as HTML.

Works by writing to the out file on error to insert the error into the html so it's loud and in your face.

## Install

```sh
npm i -D esbuild-plugin-frontend-errors
```

## Usage

Import and add to plugins array, e.g. to set up with esbuild to watch for changes:

```js
const esbuild = require('esbuild');

const frontEndErrorsPlugin = require('esbuild-plugin-frontend-errors');

esbuild.context({
  entryPoints: ['frontend/src/app.js'],
  outfile: 'frontend/build/app.js',
  bundle: true,
  sourcemap: true,
  plugins: [frontEndErrorsPlugin]
}).then(ctx => ctx.watch());
```

## License

[MIT](./LICENSE)
