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

  isIsosceles = function(side_a, side_b, side_c) {
    if (((side_a === side_b) || (side_b === side_c) || (side_a === side_c))  && !isEquilateral(side_a, side_b, side_c)) {
      return true;
    }
    else {
      return false;
    }
  };

  isScalene = function(side_a, side_b, side_c) {
    if (((side_a != side_b) && (side_a != side_c) && (side_b != side_c)) && isTriangle(side_a, side_b, side_c)) {
      return true;
    } else {
      return false;
    }
  }



   return { isTriangle: isTriangle,
            isEquilateral: isEquilateral,
            isIsosceles: isIsosceles,
            isScalene: isScalene};

};

$(document).ready(function() {
  $('form#triangle-form').submit(function(event){
    var side_a = parseInt($('input#side-a').val());

    var side_b = parseInt($('input#side-b').val());

    var side_c = parseInt($('input#side-c').val());

    t = triangle();
    if (t.isTriangle(side_a, side_b, side_c)) {
      if (t.isEquilateral(side_a, side_b, side_c)) {
        $('.type').text("an equilateral");

      } else if (t.isIsosceles(side_a, side_b, side_c)) {
        $('.type').text("an isosceles");

      } else if (t.isScalene(side_a, side_b, side_c)) {
        $('.type').text("a scalene");
      }

    } else {
      $('.not').text("not");
      }

    $('.result').show();
    event.preventDefault();


  });

});
