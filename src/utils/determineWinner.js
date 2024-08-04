const determineWinner = (heroes, selectedHeroesId) => {
    if (!selectedHeroesId.length || selectedHeroesId.length < 2) {
      return null;
    }
    
    const winnerIndex = selectedHeroesId.reduce((prev, current) => {
      const prevPower = Object.values(heroes[prev-1].powerstats).reduce((a, b) => a + b, 0);
      const currentPower = Object.values(heroes[current-1].powerstats).reduce((a, b) => a + b, 0);
      
      return currentPower > prevPower ? current : prev;
    });
    
    return heroes[winnerIndex - 1];
  };
  
  export default determineWinner;