const Koa = require('koa');

const viewConfig = require('./config/viewEngine');
const router = require('./routes');

const app = new Koa();

function setup(fetcher) {
  /*
   MIDDLEWARES
   */
  app.use(viewConfig);

  /*
   SETTING UP CONTEXT
   */
  app.context.fetcher = fetcher;

  /*
   ROUTES
   */
  app.use(router.routes());

  return app;
}

module.exports = setup;
