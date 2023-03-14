const express = require('express');
const fruitRouter = require('./routes/fruit');
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/fruits', fruitRouter);

app.get('/', (req, res) => {
  res.json({ message: 'ok' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
