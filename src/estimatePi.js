// eslint-disable-next-line no-unused-vars
class EstimatePi {
  constructor(){
    this.numberPointsCircle = 0;
    this.numberPointTotal = 0;
  }

  randomNumber(min, max){
    return Math.random() * (max - min) + min;
  }  

  insideOutside(pointsToPlot){
    for (var i = 0; i < pointsToPlot; i++) {
      var x = this.randomNumber(0, 1);
      var y = this.randomNumber(0, 1);
      var distance = Math.pow(x, 2) + Math.pow(y, 2);

      if (distance <= 1) {
        this.numberPointsCircle++
      }
      this.numberPointTotal++
    }
    return 4 * this.numberPointsCircle/this.numberPointTotal
  }
}