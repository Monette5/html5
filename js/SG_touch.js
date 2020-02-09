//this fuction is called to reload Gun
//keep track to avoid repetition on animation before first complete
var canIclick = 0;
function reloadGun(e){
  //check it can occur
  if(canIclick== 0 && $("#SG0_2").css('opacity') == 1) {
    //looks like we can so set flag
    canIclick=1;
    $("#SG0_1").animateSprite("play", "reload");
    //reset current shots
    current_shots=0;
    //hide reload button
    $("#SG0_2").css({opacity:0});
    //play reload sound
    $.playSound('sounds/reload');
  }
  }
  //place max shots
  var max_shots=5;
  //keep track of shots
  var current_shots=0;
//fire Gun
function fireGun(e){
//play reload animation
if(canIclick == 0 && gameEnded==0 && $("#SG0_2").css('opacity') != 1) {
  //set flag
  canIclick = 1;

$("#SG0_1").animateSprite("play", "fire");
//increment shots
current_shots++;
//play fire sound
$.playSound('sounds/fire');
//check to see if max reached
if(current_shots > max_shots) {
  //show reload button
  $("#SG0_2").css({opacity:1});
}
}
}
//array to keep track of hits
var zombieHits_counter = [0,0,0,0,0,0];
//array for each zombies limit
var zombieHits_limits = [2,1,3,2,1,3];
//keep track of zombie hits and act accordingly
function zombieHit(whichOne,xx,yy) {
  //increment counter
  zombieHits_counter[whichOne]++;
  //check to see if it has reached limit
  if(zombieHits_counter[whichOne] >= zombieHits_limits[whichOne]) {
    //reset this zombie
    SG_resetZombie(whichOne+1,1);
  }
  //add in ss
  var whichOne2=whichOne+1;
  var $effect_zombiex = $("#zombie_effect"+whichOne2);
  //reposition bubble zombie to stored vale
  $effect_zombiex.css({top:yy+'px', left:xx+'px',opacity:1});
  $effect_zombiex.animateSprite("play","z1");
  //apply scale
  $effect_zombiex.css('transform', 'scale('+scalex_zombie[whichOne]+')');
}
