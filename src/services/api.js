import axios from 'axios';

const API_URL = 'http://homologacao3.azapfy.com.br/api/ps/metahumans';

export const fetchHeroes = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching heroes:', error);
    throw error;
  }
};