import React from "react";
import { useState, useEffect } from "react";

const HeroCard = ({ hero, selectedHeroIds, onSelectHero }) => {
  let [imageUrl, setImageUrl] = useState(hero.images.xs);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedHeroIds.includes(hero.id));
  }, [selectedHeroIds, hero.id]);

  const handleCardClick = () => {
    onSelectHero(hero.id);
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
      className={`max-w-xs rounded overflow-hidden shadow-lg border-4 bg-white hover:bg-blue-200 transition-all p-7 flex flex-col items-center last:justify-end cursor-pointer ${selected ? 'border-blue-500 bg-blue-200' : ''}`}
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

/*
{
    "id": 1,
    "name": "A-Bomb",
    "slug": "1-a-bomb",
    "powerstats": {
      "intelligence": 38,
      "strength": 100,
      "speed": 17,
      "durability": 80,
      "power": 24,
      "combat": 64
    },
    "appearance": {
      "gender": "Male",
      "race": "Human",
      "height": [
        "6'8",
        "203 cm"
      ],
      "weight": [
        "980 lb",
        "441 kg"
      ],
      "eyeColor": "Yellow",
      "hairColor": "No Hair"
    },
    "biography": {
      "fullName": "Richard Milhouse Jones",
      "alterEgos": "No alter egos found.",
      "aliases": [
        "Rick Jones"
      ],
      "placeOfBirth": "Scarsdale, Arizona",
      "firstAppearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
      "publisher": "Marvel Comics",
      "alignment": "good"
    },
    "work": {
      "occupation": "Musician, adventurer, author; formerly talk show host",
      "base": "-"
    },
    "connections": {
      "groupAffiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
      "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
    },
    "images": {
      "xs": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
      "sm": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
      "md": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
      "lg": "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
    }
  },
*/