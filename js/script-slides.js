$(document).ready(function() {
  document.getElementsByTagName("html")[0].style.visibility = "visible";
  

    var $imgs = $(".content > a").clone();  
    var $len = $imgs.length;
    var $imgCount = 0;

    $(".content").html( $(".content > a:first") );  

    $(".content-overlay-right").click(function(event) { 
        $(".content > a").fadeOut(0, function() {
            $(".content > a").children().attr("src", 
                $("img", $imgs).eq(++$imgCount % $len).attr("src") );
        }).fadeIn(1000);
        event.preventDefault();
    });

    $(".content-overlay-left").click(function(event) { 
        $(".content > a").fadeOut(0, function() {
            $(".content > a").children().attr("src", 
                $("img", $imgs).eq(--$imgCount % $len).attr("src") );
        }).fadeIn(1000);
        event.preventDefault();
    });

});    
