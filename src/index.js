const App = require('./app');
const fetcher = require('got');

const app = App(fetcher);

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`App listen on port: ${port}`);
