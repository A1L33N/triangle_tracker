var triangle = require('./triangle.js');
var expect = require('chai').expect

describe('triangle', function(){
  it('returns true if it is a triangle', function(){
    a = triangle();
    expect(a.isTriangle(3, 3, 3)).to.equal(true);
  });

  it('returns false if it is not a triangle', function(){
    a = triangle();
    expect(a.isTriangle(3, 3, 10)).to.equal(false);
  });

  it('returns true if a triangle is equilateral', function(){
    a = triangle();
    expect(a.isEquilateral(5, 5, 5)).to.equal(true);
  });

  it('returns false if a triangle is  not equilateral', function(){
    a = triangle();
    expect(a.isEquilateral(4, 5, 5)).to.equal(false);
  });

  it('returns true if a triangle is isosceles', function() {
    a = triangle();
    expect(a.isIsosceles(2, 2, 4)).to.equal(true);
  });

  it('returns false if a triangle is not isosceles', function() {
    a = triangle();
    expect(a.isIsosceles(2, 2, 2)).to.equal(false);
  });

  it('returns true if a triangle is scalene', function() {
    a = triangle();
    expect(a.isScalene(2, 3, 4)).to.equal(true);
  });

  it('returns false if a triangle is not scalene', function() {
    a = triangle();
    expect(a.isScalene(2, 3, 11)).to.equal(false);
  });

});
