const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Home = require('./routes/index');

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/', Home);

app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.send('<h1>Not Found</h1><br><p>Go to or <a href="http://localhost:8080">website</a> to generate a new link</p>');
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
  next();
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})
  .on('error', (error) => {
    if (error.errno === 'EADDRINUSE') {
      console.log('Port already in use');
    } else {
      console.log(error);
    }
  });
