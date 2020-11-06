$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();
    
    
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

    $('.projects-btn-box').on('click', function(){
        $('.projects-btn-box .element').slideToggle();
    });
    $('.projects-btn-items').on('click', function(){
        $('.projects-btn-items div').slideToggle();
    });
    $('container__check').on('click', function(){
        $('.container__check input').slideToggle();
    })
    $('container__check').on('click', function(){
        $('.container__check .checkmark').slideToggle();
    });
    $('project__check').on('click', function(){
        $('.project__check input').slideToggle();
    });
    $('project__check').on('click', function(){
        $('.project__check .checkmark').slideToggle();
    })

    
    //$('projects-btn-like').on('click', function(){
        //$('.projects-btn-like .element').slideToggle();
    //})
});