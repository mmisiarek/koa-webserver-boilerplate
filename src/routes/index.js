const Router = require('koa-router');
const { main, custom } = require('./services/web');

const web = new Router();

web
  .get('/first', main)
  .get('/first/:customThing', custom);

module.exports = new Router()
  .use('/web', web.routes());
