import axios from 'axios';

const API_KEY = '49142387-370a201ec94f73d63c9116370';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchPixabay(searchQuery) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
      },
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}
