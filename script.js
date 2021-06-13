$(function(){
    $('nav').hide();
    $('#slideUp').click(function(){
        $('#slideUp').toggleClass('open');
        $('nav').slideToggle(600);
    });
});