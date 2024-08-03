import { useState, useEffect } from 'react';
import { fetchHeroes } from '../services/api';

const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const data = await fetchHeroes();
        setHeroes(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getHeroes();
  }, []);

  return { heroes, loading, error };
};

export default useFetchHeroes;