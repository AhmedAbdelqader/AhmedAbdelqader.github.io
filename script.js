

$(function () {
   $('.toggle').click(function(){
       $(this).next('.outlineContent').slideToggle('slow');
   });
})
/*
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
*/
   
$(document).ready(function(){
    $("#forWho").click(function(){
        
        $("#forWho").css('background-color', '#fff');
        $("#outline").css('background-color', '#ebebeb');
        $("#instructor").css('background-color', '#ebebeb');
        $("#why").css('background-color', '#ebebeb');
        $("#others").css('background-color', '#ebebeb');
        /* ************* */
        
        $(".forWho").css("display", "block");
        $(".outline").css("display", "none");
        $(".instructor").css("display", "none");
        $(".why").css("display", "none");
        $(".others").css("display", "none");
    });
});

$(document).ready(function(){
    $("#outline").click(function(){
        
        $('.toggle:first').click();
        
        $("#forWho").css('background-color', '#ebebeb');
        $("#outline").css('background-color', '#fff');
        $("#instructor").css('background-color', '#ebebeb');
        $("#why").css('background-color', '#ebebeb');
        $("#others").css('background-color', '#ebebeb');
        /* ************* */
        
        $(".forWho").css("display", "none");
        $(".outline").css("display", "block");
        $(".instructor").css("display", "none");
        $(".why").css("display", "none");
        $(".others").css("display", "none");
    });
});

$(document).ready(function(){
    $("#instructor").click(function(){
        
        $("#forWho").css('background-color', '#ebebeb');
        $("#outline").css('background-color', '#ebebeb');
        $("#instructor").css('background-color', '#fff');
        $("#why").css('background-color', '#ebebeb');
        $("#others").css('background-color', '#ebebeb');
        /* ************* */
        
        $(".forWho").css("display", "none");
        $(".outline").css("display", "none");
        $(".instructor").css("display", "block");
        $(".why").css("display", "none");
        $(".others").css("display", "none");
    });
});

$(document).ready(function(){
    $("#others").click(function(){
        
        $("#forWho").css('background-color', '#ebebeb');
        $("#outline").css('background-color', '#ebebeb');
        $("#instructor").css('background-color', '#ebebeb');
        $("#why").css('background-color', '#ebebeb');
        $("#others").css('background-color', '#fff');
        /* ************* */
        
        $(".forWho").css("display", "none");
        $(".outline").css("display", "none");
        $(".instructor").css("display", "none");
        $(".why").css("display", "none");
        $(".others").css("display", "block");
    });
});

$(document).ready(function(){
    $("#why").click(function(){
        
        $("#forWho").css('background-color', '#ebebeb');
        $("#outline").css('background-color', '#ebebeb');
        $("#instructor").css('background-color', '#ebebeb');
        $("#why").css('background-color', '#fff');
        $("#others").css('background-color', '#ebebeb');
        /* ************* */
        
        $(".forWho").css("display", "none");
        $(".outline").css("display", "none");
        $(".instructor").css("display", "none");
        $(".why").css("display", "block");
        $(".others").css("display", "none");
    });
});


/* *********************************************************************************** */

$('.downArrow').click(function () { // Down
  $('html, body').animate({
    scrollTop: $('.content').offset().top
  }, 1000);
});
