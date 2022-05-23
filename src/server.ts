import express from 'express';
import cors from 'cors';
import { createResponse } from './helpers';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/api/items', async (req, res) => {
  const { query: { q } } = req;
  
  createResponse({
    status: 200,
    success: false,
    message: 'Email does not exists',
  }, res)
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
});
