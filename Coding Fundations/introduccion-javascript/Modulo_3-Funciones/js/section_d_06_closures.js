function battingAverage () {
  var hits = 100;
  var atBats = 300;
  
  return {
    getCurrentAverage: function () {
      return (hits/atBats);
    },
    updateHitsAndAtBats: function (hit, atBat) {
      hits += hit;
      atBats += atBat;
      console.log(`Actualizdo valor hits: ${hits} atBats: ${atBats}`);
      
    }
  }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(3, 20);
console.log(altuve.getCurrentAverage());


