$(document).ready(function(){

$(".button").hide();
$("#char-count").hide();

$(".tweet-compose").click(function(){
$(".button").show();
$("#char-count").show();
$('.tweet-compose').show(function () {
    $(this).animate({ height: "5em" }, 0);

});

});

});
