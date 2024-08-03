import React from 'react';
import useFetchHeroes from './hooks/useFetchHeroes';
import useDebounce from './hooks/useDebounce';
import HeroList from './components/HeroList';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

const App = () => {
  const { heroes, loading, error } = useFetchHeroes();
  const [selectedHeroIds, setSelectedHeroIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHero, setSelectedHero] = useState(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );
  
  const handleSelectHero = (id) => {
    setSelectedHeroIds(prevIds => {
      if (prevIds.includes(id)) {
        return prevIds.filter(heroId => heroId !== id);
      } 
      else {
        return [...prevIds, id];
      }
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="px-2 py-4 max-w-7xl">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeroList heroes={filteredHeroes} selectedHeroIds={selectedHeroIds} onSelectHero={handleSelectHero} />
    </div>
  );
};

export default App;