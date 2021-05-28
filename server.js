const express = require('express');
const fs = require('fs');
const path = require('path');
const resolve = file => path.resolve(__dirname, file);
const template = fs.readFileSync(resolve('./src/index.template.html'), 'utf8');
const bundle = fs.readFileSync(resolve('./dist/server-bundle.js'), 'utf8');
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
  template
});
const app = express();

app.use('/dist/build.js', express.static(resolve('./dist/build.js')));
app.get('*', (request, response) => {
  const context = {
    url: request.url
  }
  renderer.renderToString(context, (error, html) => {
    if (error) {
      if (error.code === 404) {
        response
          .status(404)
          .end('Page not found')
      } else {
        response
          .status(500)
          .end('Internal Server Error')
      }
    } else {
      response.send(html)
    }
  })
});

app.listen(6969);
