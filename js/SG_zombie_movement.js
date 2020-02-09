//let's create a zombie

function SG_createZombie(whichOne){
  //make new div for zombie
  var div = document.createElement('div');
  //make new div for bubble zombie
  var div2 = document.createElement('div');
  //add another for special effect ss
  var div3 = document.createElement('div');
  //hard code css
  div.setAttribute('style', 'position: fixed; top:0; left:0; opacity:1; position:absolute; display: inherit;');
  div2.setAttribute('style', 'position: fixed; top:0; left:0; position:absolute;');
  div3.setAttribute('style', 'position: fixed; top:0; left:0; position:absolute;');
  //position zombie at tip of planet
  var top_position = $('#SG0_0').height() * 0.435;
  //xpos can be anywhere on xaxis
  var left_position = Math.floor(Math.random() *
($('#SG0_0').width()) - (ratio*50)) + (ratio*50);
//record left position
leftx_zombie[whichOne-1]=left_position;

//position zombie
div.style.left = left_position+'px'; div.style.top = top_position+'px';
//position bubble zombie
div2.style.left = left_position+'px'; div.style.top = top_position+'px';
//position ss
div3.style.left = left_position+'px'; div3.style.top = top_position+'px';
//zombie id
div.id ='zombie'+whichOne;
//bubble zombie id
div2.id ='bubble_zombie'+whichOne;
//ss
div3.id ='zombie_effect'+whichOne;
//add zombie to screen
document.body.appendChild(div);
$('#SG_maincontent').append(div);
//add bubble zombie to screen
document.body.appendChild(div2);
$('#SG_maincontent').append(div2);
//add ssscreen
document.body.appendChild(div3);
//put through ss function
setup_zombie_SS(whichOne);
//put through animate function
SG_animateZombie(whichOne);
//bind mouse click

//hide bubble zombies at start
$("#bubble_zombie"+whichOne).css('transform', 'scale('+0+')');
//no hits for ss
$("#zombie_effect"+whichOne).css('pointer-events', 'none');
//set zindex zombie
$("#zombie"+whichOne).css('z-index', whichOne+100);
//set zindex bubble_zombie
$("#bubble_zombie"+whichOne).css('z-index', whichOne);
//set zindex ss
$("#zombie_effect"+whichOne).css('z-index', whichOne+150);
//gun index highest
$("#SG0_2").css('z-index', 200);
//gameover intro index highest
$("#SG0_4").css('z-index', 201);
//bind mouse click
$("#zombie"+whichOne).bind('mousedown touchstart', function (e) {
  if($("#SG0_2").css('opacity') != 1){
      //fire gun
      fireGun(event);
  //make sure reload button showing
  if($("#zombie"+whichOne).css('opacity') != 0)  {
    var offset = $(this).offset();
  //log hit
  zombieHit(whichOne-1, e.pageX, e.pageY);
}
}
});

$("#bubble_zombie"+whichOne).bind('mousedown touchstart', function (e) {
  //make sure reload button showing
  if($("#SG0_2").css('opacity') != 1){
    //fire gun
    fireGun(event);
}
});
}
//need to keep track of current stale values
var scalex_zombie = [0,0,0,0,0,0];
//need to keep track of left pos
var leftx_zombie = [0,0,0,0,0,0];

function SG_animateZombie(whichOne) {
  //assign speed
  var timex = [13000,8000,16000,14000,10000,18000];
  //assign name to div
  var $zombiex = $("zombie",+whichOne);
  //reset zombie scale value
  $zombiex.css('transform','scale('+0+')');
  //reset zombie opacity
  $zombiex.css({opacity:1});
  //work out the amount the zombie has to cometowards us
  var amty = ($(window).height()*0.7);//-($zombiex.height()*2));//topx);
  //each type of zombie will have own walking style
  var tf_ease = ['easeInSine','easeOutQuart','easeInOutQuad', 'easeInSine', 'easeOutQuart','easeInOutQuad'];
  //ready to animate
  $zombiex.delay(timex[whichOne-1]/3).animate({
    //bring zombie slowly down screen
    left: "+="+1+ "px",
  },{easing:tf_ease[whichOne-1], duration: timex[whichOne-1],duration:
    timex[whichOne-1],

  step: function(now, fx){
    //at each step manipulate scale
    if(fx.prop == "left") {
    var xx = (fx.pos)*16;
    if(gameEnded==1){
      xx=999;
    }
    //check to see if animation should end
    if(xx>15){
      //stop all animation
      $(this).stop();
      //call a function to reset
      SG_resetZombie(whichOne,0);
      //game over
      $(this).css({opacity:0});
      $(this).stop(true,true);
      $(this).finish();
      if(gameEnded==0 && xx!=999){
        start_end_game(1);
      }
    } else {
      //apply the scale
      $(this).css('transform','scale('+xx+')');
      //record new scale value
      scalex_zombie[whichOne-1]=xx;
      //check depth levels
      var i = 0;
      while (i < 6) {
        //check to see if scale is bigger
        if(scalex_zombie[whichOne-1] > scalex_zombie[i] && ($(this).
      zIndex() < $("#zombie"+(i+1)).zIndex()) && scalex_zombie[i]!=0) {
        var i_index =
        $('#zombie'+(i+1)).zIndex();
        //change i first
        $("#zombie"+(i=1)).css("z-index", $(this).css("z-index"));
         $(this).css("z-index", i_index);
      }
      i++;

      }
    }
    }

},
complete: function () {
}
});
}
//keep track of current zindex
var zindex_current=0;
//function to reset zombie
function SG_resetZombie(whichOne, zombieBubble_generate) {
  //reset hit counter
  zombieHits_counter[whichOne-1]=0;
  //assign name to div
  var $zombiex = $("#zombie",+whichOne);
  //stop the zombie's animation
  $zombiex.stop();
  //reset zombie scale value
  var top_position = $('#SG0_0').height() * 0.435;
//  should we generate a bubble zombie
if(zombieBubble_generate==1){
  //assign a user frinedly name for bubble zombie div
  var $bubble_zombiex = $("#bubble_zombie"+whichOne);
  //reposition bubble zombie to stored value
  $bubble_zombiex.css({top: top_position+'px',left:$zombiex.css("left"),opacity:1});
  //reposition bubble zombie in stored value
  $bubble_zombiex.css({top: top_position+'px', left: $zombiex.css("left")});
  //apply the scale
  $bubble_zombiex.css('transform', 'scale('+scalex_zombie[whichOne-1]+')');
  //call our bubble zombie animation function
  bubbleZombie_flyAway(whichOne);

}
  //xpos can be anywhere on xaxis
  var left_position = Math.floor(Math.random() *
  ($('#SG0_0').width()) - (ratio*50)) + (ratio*50);
  //record left position
  leftx_zombie[whichOne-1]=left_position;
  //position zombie
  $zombiex.css({left: left_position+'px', top: top_position+'px',opacity:0});
  //set zindex for zombie
  zindex_current++;
  $("#zombie",+whichOne).css("z-index",zindex_current);
  //SG_animateZombie(whichOne);
  //makezombie come towards screen
  if(zombieBubble_generate==0){
    SG_animateZombie(whichOne);
  }

}
