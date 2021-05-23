const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

// eslint-disable-next-line
app.post('/', (req, res) => {
  // code for generating unique id and save it to the db and send response url json
  res.end(JSON.stringify({ message: 'Hello' }));
});

app.get('/:id', (req, res) => {
  // code for checking if the id in the db exists, if it does then redirect with 301 to saved url
  res.redirect('', 301);
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
