
t = triangle();
$(document).ready(function() {
  $('form#triangle-form').submit(function(event){
    var side_a = parseInt($('input#side-a').val());

    var side_b = parseInt($('input#side-b').val());

    var side_c = parseInt($('input#side-c').val());


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
