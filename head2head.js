var today = new Date();
if(today.getDay() == 2 || today.getDay() == 3 || today.getDay() == 4) {
    $("#matchdiv").show();
    $("#scorediv").hide();
    $("#lastdiv").show();
} else {
    $("#scorediv").show();
    $("#matchdiv").hide();
    $("#lastdiv").hide();
}
