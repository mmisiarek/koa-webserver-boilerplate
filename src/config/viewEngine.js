const views = require('koa-views');
const path = require('path');

module.exports = views(path.resolve(__dirname, '..', 'views'), {
  map: {
    html: 'handlebars',
  },
});
