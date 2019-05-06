$(document).ready(function(){
    var visible_block = $('#blocks-switch .selected').data('for');
    $("#"+visible_block).removeClass('d-none');

    $('#blocks-switch li').on('click', function(e) {
        $('#blocks-switch li').removeClass('selected');
        $('.info-blocks').addClass('d-none');
        var new_block = $(this).data('for');
        $("#"+new_block).removeClass('d-none');
        $(this).addClass('selected');
    });

    $(".mc_input").attr('placeholder', 'Email address');
    $('.mc_signup_submit input').each(function(e) {
        var obj =  $(this);
        var a = $("<a class='button-green'>"+obj.val()+"</a>").on('click', function(){
            obj.click();
        });
        obj.hide();
        obj.parent().append(a);
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 21) {
        $('nav').addClass('fixed_header');
        $('nav ul#menu-top-menu li a').addClass('dark_text');
    }
    else {
        $('nav').removeClass('fixed_header');
        $('nav ul#menu-top-menu li a').removeClass('dark_text');
    }
});

function toggleMobileMenu (obj) {
    $("#mobile-menu").toggleClass('visible-menu');
    $(obj).toggleClass('active');
}