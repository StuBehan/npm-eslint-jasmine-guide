describe('EstimatePi', function(){

  var estimatePi;

  beforeEach(function(){
    estimatePi = new EstimatePi();
  })

  it('has a default numberPointsCircle which is zero', function(){
    expect(estimatePi.numberPointsCircle).toEqual(0)    
  })

  it('has a default numberPointTotal which is zero', function(){
    expect(estimatePi.numberPointTotal).toEqual(0)    
  })

  describe('The caclulation methods', function(){
    it('returns a random number between 0 and 1', function(){
      expect(estimatePi.randomNumber(0, 1)).toBeGreaterThan(0)
      expect(estimatePi.randomNumber(0, 1)).toBeLessThan(1)
    })

    it('insideOutside uses rand to plot points and determine their distance form origin', function(){
      expect(estimatePi.insideOutside(1000000)).toBeCloseTo(3.14)
    })
  })
})
