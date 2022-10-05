// @codekit-prepend "/vendor/hammer-2.0.8.js";

$( document ).ready(function() {
  
  
    $('.cta_logo').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 6;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });
  
    $('.cta_1').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 5;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });
    $('.cta_2').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 5;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });
    $('.cta_3').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 4;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });
    $('.cta_4').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 3;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });

    $('.cta_5').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 2;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });
    $('.cta_6').click(function(){
  
      var curActive = $('.side-nav').find('.is-active'),
          curPos = $('.side-nav').children().index(curActive),
          lastItem = $('.side-nav').children().length - 1;
          nextPos = lastItem;
  
      updateNavs(lastItem);
      updateContent(curPos, nextPos, lastItem);
  
    });

  
  

  
    // sync side and outer navigations
    function updateNavs(nextPos) {
  
      $('.side-nav, .outer-nav').children().removeClass('is-active');
      $('.side-nav').children().eq(nextPos).addClass('is-active');
      $('.outer-nav').children().eq(nextPos).addClass('is-active');
  
    }
  
    // update main content area
    function updateContent(curPos, nextPos, lastItem) {
  
      $('.main-content').children().removeClass('section--is-active');
      $('.main-content').children().eq(nextPos).addClass('section--is-active');
      $('.main-content .section').children().removeClass('section--next section--prev');
  
      if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
        $('.main-content .section').children().removeClass('section--next section--prev');
      }
      else if (curPos < nextPos) {
        $('.main-content').children().eq(curPos).children().addClass('section--next');
      }
      else {
        $('.main-content').children().eq(curPos).children().addClass('section--prev');
      }
  
      if (nextPos !== 0 && nextPos !== lastItem) {
        $('.header--cta').addClass('is-active');
      }
      else {
        $('.header--cta').removeClass('is-active');
      }
  
    }

  });
  