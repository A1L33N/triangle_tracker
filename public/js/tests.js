//var triangle = require('./triangle.js');
var expect = require('chai').expect
var triangle = function() {
  var isTriangle;
  //, isEquilateral, isIsosceles, isScalene
  isTriangle = function(side_a, side_b, side_c) {
    if (( side_c <= side_a + side_b)  &&  ( side_a <= side_c + side_b ) && ( side_b <= side_a + side_c )) {
      return true;
    }
    else {
      return false;
    }

  };

   return { isTriangle: isTriangle };

};

describe('triangle', function(){
  it('returns true if it is a triangle', function(){
    a = triangle();
    expect(a.isTriangle(3, 3, 3)).to.equal(true);
  });

  it('returns false if it is not a triangle', function(){
    a = triangle();
    expect(a.isTriangle(3, 3, 10)).to.equal(false);
  });
});
