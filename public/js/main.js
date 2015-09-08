

$(document).ready(function() {
  $('form#triangle-form').submit(function(event){
    var side_a = parseInt($('input#side-a').val());

    var side_b = parseInt($('input#side-b').val());

    var side_c = parseInt($('input#side-c').val());

    t = triangle(side_a, side_b, side_c);


    if (t.isTriangle()) {
      if (t.isEquilateral()) {
        $('.type').text("an equilateral");

      } else if (t.isIsosceles()) {
        $('.type').text("an isosceles");

      } else if (t.isScalene()) {
        $('.type').text("a scalene");
      }

    } else {
      $('.not').text("not");
      }

    $('.result').show();
    event.preventDefault();


  });

});
