var triangle = require('./triangle.js');
var expect = require('chai').expect

describe('triangle', function(){
  it('returns true if it is a triangle', function(){
    a = triangle(3, 3, 3);
    expect(a.isTriangle()).to.equal(true);
  });

  it('returns false if it is not a triangle', function(){
    a = triangle(3, 3, 10);
    expect(a.isTriangle()).to.equal(false);
  });

  it('returns true if a triangle is equilateral', function(){
    a = triangle(5, 5, 5);
    expect(a.isEquilateral()).to.equal(true);
  });

  it('returns false if a triangle is  not equilateral', function(){
    a = triangle(4, 5, 5);
    expect(a.isEquilateral()).to.equal(false);
  });

  it('returns true if a triangle is isosceles', function() {
    a = triangle(2, 2, 4);
    expect(a.isIsosceles()).to.equal(true);
  });

  it('returns false if a triangle is not isosceles', function() {
    a = triangle(2, 2, 2);
    expect(a.isIsosceles()).to.equal(false);
  });

  it('returns true if a triangle is scalene', function() {
    a = triangle(2, 3, 4);
    expect(a.isScalene()).to.equal(true);
  });

  it('returns false if a triangle is not scalene', function() {
    a = triangle(2, 3, 11);
    expect(a.isScalene()).to.equal(false);
  });

});
