var bottlesOfBeer = function(number) {
  if (number === 0) {
    return ' No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
  } else if (number === 1) {
    return ' 1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.' +  bottlesOfBeer(number - 1);
  } else if (number === 2) {
    return ' 2 bottles of beer on the wall, 2 bottles of beer.  Take one down, pass it around, 1 bottle of beer on the wall.' +  bottlesOfBeer(number - 1);
  } else {
    return "\n" + number + ' bottles of beer on the wall, ' + number + ' bottles of beer. Take one down and pass it around, ' + (number - 1) + ' bottles of beer on the wall.' +  bottlesOfBeer(number - 1);
    }
  }


$(document).ready(function() {
  $("form#bottles_of_beer").submit(function(event) {
    var number = parseInt($("input#number").val());
    if(isNaN(number)) {
      $(".song").text("Can't sing to that!");
    } else {
      var result = bottlesOfBeer(number);
      $(".song").text(result);
    }

    $("#result").show();
    event.preventDefault();
  })
})
