import axios from 'axios';

const API_URL = '/api/ps/metahumans';

export const fetchHeroes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
};