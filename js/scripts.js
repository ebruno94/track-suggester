function calculate(points){
  var result = 0;
  points.forEach(function(point){
    result += point;
  });
  return result;
};


$(document).ready(function(){

  $("#form").submit(function(event) {
    event.preventDefault();
    var ansWhy = parseInt($("input:radio[name=why]:checked").val());
    var ansBF = parseInt($("input:radio[name=bf]:checked").val());
    var ansCom = parseInt($("input:radio[name=company]:checked").val());
    var ansPlat = parseInt($("input:radio[name=platform]:checked").val());
    var ansLike = parseInt($("input:radio[name=micro]:checked").val());

    var scores = [ansWhy, ansBF, ansCom, ansPlat, ansLike];
    var totalScore = calculate(scores);
    console.log(totalScore);
    $("resBanner").show();
    if (totalScore > 10){
      $("#resultC").show("ease");
    } else {
      if (totalScore <= 5){
        $("#resultPHP").show("ease");
      } else if (totalScore > 5 && totalScore <= 6){
        $("#resultCSS").show("ease");
      } else if (totalScore > 6 && totalScore <= 8){
        $("#resultJAVA").show("ease");
        if (totalScore > 7){
          $("#resultRUBY").show("ease");
        }
      }
    }
  });
  $("button#reset").click(function(){
    location.reload();
  });
});
