if($("#waive2div").text().match([1])){
    $("#waive2div").show();
    $("#waive2div").effect( "pulsate", {times:5}, 5000 );
} else {
    $("#waive2div").hide();
}
$("#waive2div").click(function(){ 
    event.preventDefault();
    window.location.href = "http://www68.myfantasyleague.com/2017/add_drop?L=48963";
});
