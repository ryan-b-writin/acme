$(document).ready(function(){

var secondDropdown =
'<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">'
+'Product Types<span class="caret"></span></button><ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'
+'<li id="personal" class="types">Personal</li>'
+'<li role="separator" class="divider"></li>'
+'<li id="flare" class="category">Flares</li>'
+'<li role="separator" class="divider"></li>'
+'<li id="professional" class="category">Professional</li></ul></div>'

function addPulldown(){
  $("#dd2").append(secondDropdown);
}

$(".category").click(function(){
  addPulldown();
});
});