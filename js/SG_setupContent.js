//new ratio var
var ratio_use =ratio;
//main function
function main_call_setupContent(){
  //resize all elements
  //first set sizes in css
  //Gun
  $('#SG0_1').css('width', 150 * ratio);
  $('#SG0_1').css('height', 150 * ratio);

  //Reload button
  $('#SG0_2').css('width', 200 * ratio);
  $('#SG0_2').css('height', 90 * ratio);

  //Score
  $('#SG0_3').css('width', 233 * ratio);
  $('#SG0_3').css('height', 100 * ratio);

  //main div
  $('#SG_maincontent').css('width', 600 * ratio);
  $('#SG_maincontent').css('height', 400 * ratio);
//make sure is halfway
$('#SG_maincontent').css('left', ($(window).width()/2)-((600 * ratio_use)/2));
$('#SG_maincontent').css('top', ($(window).height()/2)-((400 * ratio_use)/2));
  //box1
  $('#box1').css('width', 631 * ratio);
  $('#box1').css('height', 457 * ratio);
  //make sure is halfway
  $('#box1').css('left', ($(window).width()/2)-((637 * ratio_use)/2));
  $('#box1').css('top', ($(window).height()/2)-((457 * ratio_use)/2));
  //logo
  $('#logo').css('width', 400 * ratio);
  $('#logo').css('height', 146 * ratio);
  //make sure is halfway
  $('#logo').css('left', 0);
  $('#logo').css('top', 0);
//intro and game over
if($(window).height()<$(window).width()) {
  //work out ratio based on height
  ratio_use = $(window).height()/800;
}

  $('#SG0_4').css('width', 458 * ratio_use);
  $('#SG0_4').css('height', 370 * ratio_use);
  $('#SG0_4').css('left',71 * ratio);
  //$('#SG0_4').css('left', ($(window).width()/2)-((868 * ratio_use)/2));
//  $('#SG0_4').css('top', ($(window).height()/2)-((701 * ratio_use)/2));
//Seagull
  $('#SG0_41').css('width', 200 * ratio);
  $('#SG0_41').css('height', 150 * ratio);
  //Bee
  $('#SG0_5').css('width', 150 * ratio);
  $('#SG0_5').css('height', 150 * ratio);
  $('#textx').css('width', '100%');
  $('#textx').css('height', '50%');
  //any sprite shhets?
  //our Gun
  setup_Gun_SS();
  for(i = 1;i < 7; i++){
    SG_createZombie(i);
  }
  //call intro
  start_end_game(0);

}
var gameEnded=0;
//intro or game over
function start_end_game(whichOne) {
  //hide elements
  for(i = 1;i < 4; i++){
  $('#SG0_'+i).css({opacity: 0});
  }
  //hide zombies
  for(i = 1;i < 7; i++){
    //stop animation
    $('#zombie_'+i).stop();
    $('#zombie_'+i).css({opacity: 0});
    $('#bubble_zombie_'+i).css({opacity: 0});
    //set zindex for zombie
    $("#zombie"+i).css("z-index",i+100);
  }
if(whichOne==0){
  //start of game
  //change background imge
  $('#SG0_4').css('background-image', 'url(Images/splash_intro.png)');
} else {
  //game over
  //show score
    $('#SG0_3').css({opacity: 1});
    $('#SG0_4').css('background-image', 'url(Images/splash_gameover.png)');
}
//make sure it is half way
$('#SG0_4').css('top', 0);
//show intro at game over event
$('#SG0_4').css({opacity: 1});
//stop user firing
gameEnded=1;
}//end function
//need to store currnt score
var current_score=0;
//we can call the function to updae the score
function updateScore(){
  $("#textx").text(current_score);
}
//start game
function start_game() {
  //reset score
  current_score=0;
  updateScore();
  //reset zindex
  zindex_current=0;

  //reload gun
  current_shots=0;
  //allow firing
  gameEnded=0;
  //hide intro or game over
  $('#SG0_4').css({opacity: 0});
  //make sure it is out of the way
  $('#SG0_4').css('top', ($(window).height()));
  //show elements
  for(i = 1;i < 4; i++){
  $('#SG0_'+i).css({opacity: 1});
  }
  //hide reload
  $('#SG0_2').css({opacity: 0});
//  show zombies
  for(i = 1;i < 7; i++){
    //reset zombie
    SG_resetZombie(i,0);
  }
  //scoreboard half opacity
  $('#SG0_3').css({opacity: 0.5});
  }

//var image_ids = ["#SG_1", "#SG_2", "#SG_3", "#SG_4", "#SG_5"];
//var image_sizes = [ [150, 150], [200, 90], [233, 100], [200, 100], [150, 150]];
//for (var i = 0; i >= image_ids.length; i++){
//for (var j = 0; j >= image_sizes.length; j++){
//image_ids[i].css('width', image_sizes[j][0]);
//image_ids[i].css('height', image_sizes[j][1]);
//}
//}
