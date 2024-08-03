import React from 'react';
import useFetchHeroes from './hooks/useFetchHeroes';
import HeroList from './components/HeroList';
// import SearchBar from './components/SearchBar';

const App = () => {
  const { heroes, loading, error } = useFetchHeroes();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="App">
      <HeroList heroes={heroes} />
    </div>
  );
};

export default App;