/* eslint-env node, mocha */
const assert = require('assert');
const supertest = require('supertest');
const cheerio = require('cheerio');


const App = require('../src/app');

const fetcher = () => Promise.resolve({
  body: JSON.stringify({ test: 'This is http test response' }),
});

const app = App(fetcher);
const server = app.listen();
const request = supertest(server);

describe('Main route', () => {
  it('should work', (done) => {
    request
      .get('/web/first')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        const $ = cheerio.load(res.text);
        const title = $('.title');
        assert.equal(title.text(), 'Boilerplate');
        done();
      });
  });
  it('should accept parameters', (done) => {
    request
      .get('/web/first/times')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        const $ = cheerio.load(res.text);
        const title = $('.title');
        assert.equal(title.text(), 'times');
        done();
      });
  });
});
