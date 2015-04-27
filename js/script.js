$(document).ready(function() {
    //document.getElementsByTagName("html")[0].style.visibility = "visible";
    //$(".index").addClass("animate"); 
    window.onload = function() {
        $('body').fadeIn(1000);
    }


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

    $("body").keydown(function(e) {
        if(e.which == 37) {     
            $(".content > a").fadeOut(0, function() {
                $(".content > a").children().attr("src", 
                    $("img", $imgs).eq(--$imgCount % $len).attr("src") );
            }).fadeIn(1000);
            event.preventDefault();
        } else if(e.which == 39) {
            $(".content > a").fadeOut(0, function() {
                $(".content > a").children().attr("src", 
                    $("img", $imgs).eq(++$imgCount % $len).attr("src") );
            }).fadeIn(1000);
            event.preventDefault();
        }
    });

    $(".menu-button").click(function(){
        if($(".menu").hasClass("menu-active")) {
            $(".menu").removeClass("menu-active");
        }
        else {
            $(".menu").addClass("menu-active");
        }
    });

    $(".page_container").click(function(){
        if($(".menu").hasClass("menu-active")) {
            $(".menu").removeClass("menu-active");
        }
    });
});    
