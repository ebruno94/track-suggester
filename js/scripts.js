$(document).ready(function(){

  $("#form").submit(function(event) {
    var ansWhy = $("input:radio[name=why]:checked").val();
    var ansBF = $("input:radio[name=bf]:checked").val();
    var ansCom = $("input:radio[name=company]:checked").val();
    var ansClr = $("input:radio[name=color]:checked").val();
    var ansPlat = $("input:radio[name=platform]:checked").val();
    var ansLike = $("input:radio[name=micro]:checked").val();

    var classResult = "." + ansWhy + "." + ansBF + "." + ansCom + "." + ansClr + "." + ansPlat + "." +  ansLike;

    if (div.classList.contains(classResult)){
        $(classResult).show();
    }

    event.preventDefault();
  });

});
