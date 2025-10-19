$(document).ready(function(){
    $("#ball").mouseenter(function(){
        $(this).attr("src", "img/pallo2.jpg"); 
    });

    $("#ball").mouseleave(function(){
        $(this).attr("src", "img/pallo.jpg"); 
    });
});

// functio lisää maapalloon räjähdyksen kun sitä koskettaa hiirellä ja palauttaa sen takaisin kun hiiren ottaa pois