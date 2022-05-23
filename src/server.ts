import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { createResponse, mapAvailableFilters, mapItems, sendErrorMessage } from './helpers';

const app = express();
const port = 3001;

const API_HOST = 'https://api.mercadolibre.com';
const ERROR_MESSAGE = 'Something went wrong';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/items', async (req, res) => {
  const { query: { q: search } } = req;
  if (search) {
    const url = encodeURI(`${API_HOST}/sites/MLA/search?q=​${search}`);
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const formattedItems = response.data.results.map(mapItems);
        const categories = mapAvailableFilters(response.data.available_filters);
        return createResponse({
          status: 200,
          success: true,
          message: 'Items found',
          data: {
            author: {
              name: 'Edwin',
              lastname: 'Garcés',
            },
            categories,
            items: formattedItems,
          },
        }, res);
      } else {
        return sendErrorMessage(ERROR_MESSAGE, res);
      }
    } catch (err) {
      console.log(err);
      return sendErrorMessage
    }
  } else {
    return sendErrorMessage(ERROR_MESSAGE, res);
  }
});

app.get('/api/items/:id', async (req, res) => {
  const { params: { id } } = req;
  if (id) {
    const url = encodeURI(`${API_HOST}/items/${id}`);
    const descriptionUrl = encodeURI(`${API_HOST}/items/${id}/description`);
    try {
      const response = await axios.get(url);
      const formattedItem = mapItems(response.data);
      const responseDescription = await axios.get(descriptionUrl);
      formattedItem.description = responseDescription.data.plain_text;
      if (response.status === 200) {
        return createResponse({
          status: 200,
          success: true,
          message: 'Items found',
          data: {
            author: {
              name: 'Edwin',
              lastname: 'Garcés',
            },
            item: formattedItem,
          },
        }, res);
      } else {
        return sendErrorMessage(ERROR_MESSAGE, res);
      }
    } catch (err) {
      console.log(err);
      return sendErrorMessage
    }
  } else {
    return sendErrorMessage(ERROR_MESSAGE, res);
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
