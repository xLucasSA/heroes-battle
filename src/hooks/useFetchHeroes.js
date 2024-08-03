import { useState, useEffect } from 'react';
import { fetchHeroes } from '../services/api';

const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHeroes = async () => {
      try {
        const cachedHeroes = localStorage.getItem('heroes');
        
        if (cachedHeroes) {
          setHeroes(JSON.parse(cachedHeroes));
        } 
        else {
          const data = await fetchHeroes();
          setHeroes(data);
          localStorage.setItem('heroes', JSON.stringify(data))
        } 
      }

      catch (error) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
    };

    getHeroes();
  }, []);

  return { heroes, loading, error };
};

export default useFetchHeroes;