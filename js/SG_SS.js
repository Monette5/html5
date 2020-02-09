//one stop function to allow process sprite sheets
function setup_SpriteSheet(div_name, image_name, no_of_frames, widthx, heightx) {
  //need the ratio of the container's width/height
  var imageOrgRatio = $(div_name).height() / $(div_name).width();
  //ensure no trailing decimals
  var ratio2 = Math.round(ratio * 10) / 10;
//check that the width is completely divisible by the no of no_of_frames
var newDivisible = Math.round((widthx * ratio2) / no_of_frames);
//new width will be no of frames * new newDivisible

var newWidthx = newDivisible * no_of_frames;
//new height is ration * height of div containing imag
var newHeightx = heightx * ratio2;

//apply new width to css
$(div_name).css('width', newWidthx);
// apply new height
$(div_name).css('height', newHeightx);

//take image name and apply as background image to div
$(div_name).css('background-image', 'url('+image_name + ')');
//apply a background size remembering to * width by number of frames
$(div_name).css('background-size', newWidthx * no_of_frames + 'px ' + newHeightx + 'px');
}
//SETUP the Gun
function setup_Gun_SS () {
  setup_SpriteSheet("#SG0_1", "Images/SG_gun_SS.png", 28,150,150);
  //access special funtion in js/ss.js

$("#SG0_1").animateSprite({
  fps:10,
  animations: {
    static: [0],
    reload: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    fire: [24,25,26,27,28],
  },
  duration: 50,
  loop: false,
  complete: function() {
    //usecomplete only when set animations with loop false
    //alert("animation End");
    //click universal flag
    canIclick = 0;
  }

});
}
function setup_zombie_SS(whichOne){
  //type of zombie
  var type_zombie = [1,2,3,1,2,3];
  //setup speed for each type
  var speed_zombie = [100,50,150];
  //set up zombie ss

  setup_SpriteSheet("#zombie" +whichOne,"Images/zombiesSS_" +type_zombie[whichOne-1]+".png",9,20,20);
  //need to access special function in js/ss.js

  $("#zombie" +whichOne).animateSprite({
  fps:10,
  animations: {
    static: [1,2,3,4,5,6,7],

  },
  duration: speed_zombie[type_zombie[whichOne-1]-1],
  loop: true,
  complete: function() {
    //usecomplete only when set animations with loop false
    //alert("animation End");
    //click universal flag

  }

});
//setup bubble zombie
setup_SpriteSheet("#bubble_zombie" +whichOne,"Images/SG_bubble.png",3,20,20);
//need to access special function in js/ss.js

$("#bubble_zombie" +whichOne).animateSprite({
fps:10,
animations: {
  z1: [type_zombie[whichOne-1]-1],

},
duration: 1,
loop: false,
complete: function() {
  //usecomplete only when set animations with loop false
  //alert("animation End");
}

});
//setup special effect
setup_SpriteSheet("#zombie_effect" +whichOne,"Images/SG_effect_ss.png",4,13,15);
//need to access special function in js/ss.js

$("#zombie_effect" +whichOne).animateSprite({
fps:10,
animations: {
  z1: [0,1,2,3],

},
duration: 20,
loop: false,
complete: function() {
  //usecomplete only when set animations with loop false
  //alert("animation End");
  $("#zombie_effect" +whichOne).css({opacity:0});
}

});
}
