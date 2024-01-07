import express from 'express';

const app = express();

app.use();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});
