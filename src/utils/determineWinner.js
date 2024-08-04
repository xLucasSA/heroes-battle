const determineWinner = (selectedHeroesId) => {
    if (!selectedHeroesId.length || selectedHeroesId.length < 2) {
      return null;
    }
    
    const winner = selectedHeroesId.reduce((prev, current) => {    
      const prevPower = Object.values(prev.powerstats).reduce((a, b) => a + b, 0);
      const currentPower = Object.values(current.powerstats).reduce((a, b) => a + b, 0);
      
      return currentPower > prevPower ? current : prev;
    });
    
    return winner;
  };
  
  export default determineWinner;