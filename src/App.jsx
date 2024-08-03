import React from 'react';
import useFetchHeroes from './hooks/useFetchHeroes';
import HeroList from './components/HeroList';
// import SearchBar from './components/SearchBar';
import { useState } from 'react';

const App = () => {
  const { heroes, loading, error } = useFetchHeroes();
  const [selectedHeroIds, setSelectedHeroIds] = useState([]);
  
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

  console.log(selectedHeroIds);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-7xl">
      <HeroList heroes={heroes} onSelectHero={handleSelectHero} />
    </div>
  );
};

export default App;