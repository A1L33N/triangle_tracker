var triangle = function(side_a, side_b, side_c) {
  var isTriangle, isEquilateral, isIsosceles, isScalene;

  isTriangle = function() {
    if (( side_c <= side_a + side_b)  &&  ( side_a <= side_c + side_b ) && ( side_b <= side_a + side_c )) {
      return true;
    }
    else {
      return false;
    }

  };

  isEquilateral = function() {
    if ((side_a === side_b) && (side_a === side_c) && (side_c === side_b)) {
      return true;

    } else {
      return false;
    }
  };

  isIsosceles = function() {
    if (((side_a === side_b) || (side_b === side_c) || (side_a === side_c))  && !isEquilateral(side_a, side_b, side_c)) {
      return true;
    }
    else {
      return false;
    }
  };

  isScalene = function() {
    if (((side_a != side_b) && (side_a != side_c) && (side_b != side_c)) && isTriangle(side_a, side_b, side_c)) {
      return true;
    } else {
      return false;
    }
  }



   return { isTriangle: isTriangle,
            isEquilateral: isEquilateral,
            isIsosceles: isIsosceles,
            isScalene: isScalene };

};




module.exports = triangle;
