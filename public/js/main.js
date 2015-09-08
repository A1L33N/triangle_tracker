$(document).ready(function {
  $('form#triangle-form').submit($function(event){
    var side-a = parseInt('input#side-a').val());

    var side-b = parseInt('input#side-b').val());

    var side-c = parseInt('input#side-c').val());

    t = triangle();
    if (t.isTriangle(side-a, side-b, side-c)){
      if (t.isEquilateral(side-a, side-b, side-c) {
        $('.type').text("an equilateral");

      } else if (t.isIsosceles(side-a, side-b, side-c) {
        $('.type').text("an isosceles");

      } else (t.isScalene(side-a, side-b, side-c) {
        $('.type').text("a scalene");
      }

    } else {
      $('.not').text("not");
      }

    $('#result').show();
    event.preventDefault();


  });

});
