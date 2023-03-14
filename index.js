const express = require('express');
const namesRouter = require('./routes/names');
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/names', namesRouter);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
