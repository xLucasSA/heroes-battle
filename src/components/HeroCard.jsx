import React from "react";
import { useState, useEffect } from "react";

const HeroCard = ({ hero, selectedHeroes, onSelectHero }) => {
  let [imageUrl, setImageUrl] = useState(hero.images.xs);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedHeroes.includes(hero));
  }, [selectedHeroes, hero]);

  const handleCardClick = () => {
    onSelectHero(hero);
  };

  const updateImageUrl = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setImageUrl(hero.images.sm);
    } else if (width < 1024) {
      setImageUrl(hero.images.md);
    } else {
      setImageUrl(hero.images.lg);
    }
  };

  useEffect(() => {
    updateImageUrl();
    window.addEventListener('resize', updateImageUrl);
    
    return () => {
      window.removeEventListener('resize', updateImageUrl);
    };
  }, [hero.images]);

  return (
    <div 
      className={`max-w-xs rounded overflow-hidden shadow-lg border-4 hover:bg-blue-200 transition-all p-7 flex flex-col items-center last:justify-end cursor-pointer ${selected ? 'border-blue-500 bg-blue-200' : 'bg-white'}`}
      onClick={handleCardClick}
    >
      <img className="sm:h-52 md:h-60 lg:h-72 object-cover rounded" src={imageUrl} alt={hero.name} />
      <div className="w-full py-4 h-48">
        <div className="font-bold text-xl mb-2 text-black text-center">{hero.name}</div>
        <p className="text-gray-700 text-base text-left">
          {hero.biography.fullName}
        </p>
        <p className="text-gray-600 text-sm mb-2 text-left">
          {hero.biography.placeOfBirth}
        </p>
      </div>
      <div>
        {Object.entries(hero.powerstats).map(([stat, value]) => (
          <span
            key={stat}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
          {stat.charAt(0).toUpperCase() + stat.slice(1)}: {value}
          </span>
        ))}
      </div>
    </div>
  );
  };
  
  export default HeroCard;