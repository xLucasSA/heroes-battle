import React from 'react';
import HeroCard from './HeroCard';

const HeroList = ({ heroes }) => {
  return (
    <div className="px-2 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {heroes.map(hero => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;