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
