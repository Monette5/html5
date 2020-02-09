function rotateGun(e){
  //use e to determine x co-ord
  var xPos = e.clientX;

//Work out location of cursor as a percentage of screen newWidth

//Divide current x pos by screen width newWidth

var currentXPositionPercentage = xPos/newWidth;

//apply this to max amountof rotation which is 50, but starting rotaion is -15
var amountToRotate = -15 + (currentXPositionPercentage * 50);

//rotate the Gun
$("#SG0_1").css('transform', 'rotate('+amountToRotate+'deg)');
}
//movement for bubble zombie
function bubbleZombie_flyAway(whichOne){
  //update score
  current_score++;
  updateScore();
  //assign user friendly div name
  var $zombiex = $("#bubble_zombie"+whichOne);
  //1st animate upwards bounce
  $zombiex.animate({
    //bring zombie up the screen
    top: "-="+100*ratio+ "px",
  },{easing: "easeOutElastic", duration: 400,

complete: function(){
  //now final animation where zombie bubble disappears
  $(this).delay(150).animate({
    //slowly turn alpha down
    opacity: "-="+1,
  },{easing:"easeOutQuint", duration:1000,
step: function(now, fx){
  //adjust scale at each step to make it look smaller
  if(fx.prop == "opacity" && fx.pos>=0.1){
    //work out the amount to scale
    var xx = 0.5/(fx.pos);
    //apply scale
    $(this).css('transform', 'scale('+xx+')');
  }
}, complete: function() {

}//end of second complete function
}); //end of second animation
}//end of first complete animation
}); //end of first animation

}
