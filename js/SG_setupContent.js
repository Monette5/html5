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

  //Seagull
  $('#SG0_4').css('width', 200 * ratio);
  $('#SG0_4').css('height', 100 * ratio);

  //Bee
  $('#SG0_5').css('width', 150 * ratio);
  $('#SG0_5').css('height', 150 * ratio);
  //any sprite shhets?
  //our Gun
  setup_Gun_SS();
}
//var image_ids = ["#SG_1", "#SG_2", "#SG_3", "#SG_4", "#SG_5"];
//var image_sizes = [ [150, 150], [200, 90], [233, 100], [200, 100], [150, 150]];
//for (var i = 0; i >= image_ids.length; i++){
//for (var j = 0; j >= image_sizes.length; j++){
//image_ids[i].css('width', image_sizes[j][0]);
//image_ids[i].css('height', image_sizes[j][1]);
//}
//}
