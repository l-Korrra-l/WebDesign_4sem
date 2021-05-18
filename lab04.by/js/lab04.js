
var a=true;


$(".button").click(function(){
    var $button = $(this);
    if (a==true)
    $("#moon").animate({
opacity: 0.25,
left:'+=50px'
},
{
duration: 20000,
start: function() {
   $button.prop('disabled', true);
   alert("hi");
},
complete: function() {
   $button.prop('disabled', false);
},
progress: function(animation, progress) {
   $('#percentage').text(Math.round(progress * 100));
   $button.before("");
}
}
);
});

$("#moon").click(function() {
    alert("hi");
    animate({
      duration: 3000,
      timing: bounceEaseOut,
      draw: function(progress) {
          alert("hi");
        $(".eyes-l").style.left = progress * 500 + 'px';
      }
    });
  })
  
function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
    }
  }

  function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }

  let bounceEaseOut = makeEaseOut(bounce);



