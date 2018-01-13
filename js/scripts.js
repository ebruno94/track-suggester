$(document).ready(function(){


  var booleanFlagCSS = false;
  var booleanFlagC = false;
  var booleanFlagJAVA = false;
  var booleanFlagPHP = false;
  var booleanFlagRUBY = false;

  $("#form").submit(function(event) {
    var ansWhy = $("input:radio[name=why]:checked").val();
    var ansBF = $("input:radio[name=bf]:checked").val();
    var ansCom = $("input:radio[name=company]:checked").val();
    var ansPlat = $("input:radio[name=platform]:checked").val();
    var ansLike = $("input:radio[name=micro]:checked").val();

    var classResult = [ansWhy, ansBF, ansCom, ansPlat, ansLike];

    for (i=0; i < classResult.length; i ++){
      if($("#resultCSS").hasClass(classResult[i])){
        booleanFlagCSS = true;
      } else if ($("#resultC").hasClass(classResult[i])){
        booleanFlagC = true;
      } else if($("#resultJava").hasClass(classResult[i])){
        booleanFlagJAVA = true;
      } else if($("#resultPHP").hasClass(classResult[i])){
        booleanFlagPHP = true;
      } else if($("#resultRuby").hasClass(classResult[i])){
        booleanFlagRUBY = true;
      }
    }

    $("#resBanner").show();
    if (booleanFlagCSS) {
      $("#resultCSS").show();

    } else if (booleanFlagC){
      $("#resultC").show();

    } else if (booleanFlagJAVA){
      $("#resultJAVA").show();

    } else if (booleanFlagPHP) {
      $("#resultPHP").show();

    } else if (booleanFlagRUBY){
      $("#resultRUBY").show();
    }

    event.preventDefault();
  });


});
