var bottlesOfBeer = function(number) {
  if (number === 0) {
    return 'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.';
  
    }
  }


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
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
