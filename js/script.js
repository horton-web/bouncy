
$(document).ready(function(){

    var $portfolio = $('.ba-container');


        var $porIso = $portfolio.isotope({
      itemSelector: '.ba-grid-item',
      percentPosition: true,
      filter: '*',
      masonry: {
        // use element for option
        columnWidth: '.ba-grid-sizer'
      }
    });


        // filter items on button click
    $('.ba-nav-portfolio').on( 'click', 'a', function(event) {
        event.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $porIso.isotope({ filter: filterValue });
    });


    $('.ba-header__slider').slick({
        'autoplay': true,
        'arrows': false,
        'speed': 1000,
        'autoplaySpeed': 1000,



     });




});


$(document).ready(function(){

    var $portfolio = $('.ba-portfolio__works');

    // $portfolio.masonry({
    //   // options
    //   itemSelector: '.ba-grid-item',
    //   columnWidth: '.ba-grid-sizer',
    //   percentPosition: true
    // });

        var $porIso = $portfolio.isotope({
      itemSelector: '.ba-grid-item',
      percentPosition: true,
      filter: '*',
      masonry: {
        // use element for option
        columnWidth: '.ba-grid-sizer'
      }
    });


        // filter items on button click
    $('.ba-portfolio__nav').on( 'click', 'a', function(event) {
        event.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $porIso.isotope({ filter: filterValue });
    });


    $('.ba-header__slider').slick({
        'autoplay': true,
        'arrows': false,
        'speed': 1000,
        'autoplaySpeed': 1000


     });




});

