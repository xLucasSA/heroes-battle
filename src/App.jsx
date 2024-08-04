import React, { useState, useEffect } from 'react';
import useFetchHeroes from './hooks/useFetchHeroes';
import useDebounce from './hooks/useDebounce';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import WinnerModal from './components/WinnerModal';
import determineWinner from './utils/determineWinner';
import { Button } from '@mui/material'

const App = () => {
  const { heroes, loading, error } = useFetchHeroes();
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleOpen = () => {
    const winnerHero = determineWinner(selectedHeroes);
      setWinner(winnerHero);    
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setWinner(null);
  };

  useEffect(() => {
    if (open === false){
      setSelectedHeroes([])
    }
  }, [open])

  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );
  
  const handleSelectHero = (hero) => {
    setSelectedHeroes(prevHeroes => {
      if (prevHeroes.includes(hero)) {
        return prevHeroes.filter(currentHero => currentHero !== hero);
      } 
      else {
        return [...prevHeroes, hero];
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-2 py-4 max-w-7xl">
      <div className="fixed top-0 left-0 flex justify-center items-center w-full bg-black h-16 place-content-center">
        <div className="px-2 w-full max-w-7xl flex justify-between">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Fight!
          </Button>
        </div>
      </div>
      <HeroList heroes={filteredHeroes} selectedHeroes={selectedHeroes} onSelectHero={handleSelectHero} />
      <WinnerModal open={open} handleClose={handleClose} winner={winner} />
    </div>
  );
};

export default App;