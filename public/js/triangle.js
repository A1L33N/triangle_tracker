var triangle = function() {
  var isTriangle, isEquilateral, isIsosceles, isScalene;

  isTriangle = function(side_a, side_b, side_c) {
    if (( side_c <= side_a + side_b)  &&  ( side_a <= side_c + side_b ) && ( side_b <= side_a + side_c )) {
      return true;
    }
    else {
      return false;
    }

  };

  isEquilateral = function(side_a, side_b, side_c) {
    if ((side_a === side_b) && (side_a === side_c) && (side_c === side_b)) {
      return true;

    } else {
      return false;
    }
  };

   return { isTriangle: isTriangle, isEquilateral: isEquilateral };



};
