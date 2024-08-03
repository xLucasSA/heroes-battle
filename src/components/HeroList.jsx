import React from 'react';
import HeroCard from './HeroCard';
import { useState, useEffect } from 'react';

const HeroList = ({ heroes, selectedHeroIds, onSelectHero }) => {
  const [displayedHeroes, setDisplayedHeroes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(20);

  useEffect(() => {
    setDisplayedHeroes(heroes.slice(0, visibleCount));
  }, [heroes, visibleCount]);

  const loadMoreHeroes = () => {
    if (visibleCount < heroes.length) {
      setVisibleCount(prevCount => prevCount + 20);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        loadMoreHeroes();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount, heroes.length]);

  return (
    <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {displayedHeroes.map(hero => (
        <HeroCard 
          key={hero.id} 
          hero={hero} 
          onSelectHero={onSelectHero}
          selectedHeroIds={selectedHeroIds}
        />
      ))}
    </div>
  );
};

export default HeroList;