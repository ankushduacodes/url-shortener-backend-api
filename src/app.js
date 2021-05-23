const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8001;

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/:id', (req, res) => {
  res.end(JSON.stringify({ message: 'Hello' }));
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
