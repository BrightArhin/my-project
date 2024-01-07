import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.get('/sayhello', (req, res) => {
  res.send('Hellooo!!!!');
});

app.listen(4000, () => {
  console.log('App listening on port 4000');
});
