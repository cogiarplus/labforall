/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    // bxSlider
    $('.slider1').bxSlider({
      slideWidth: 200,
      minSlides: 2,
      maxSlides: 6,
      slideMargin: 0,
      controls: false,
      captions: false
    });

    $('.slider2').bxSlider({
      slideWidth: 300,
      minSlides: 1,
      maxSlides: 4,
      slideMargin: 0,
      controls: false,
      captions: false
    });
      // magnific popup
    $(function () {
    	$('.popup-modal').magnificPopup({
    		// type: 'inline',
    		// preloader: false,
    		// focus: '#username',
    		// modal: true
    	});
      $('.laura').magnificPopup();
      $('.ida').magnificPopup();
      $('.rita').magnificPopup();
      $('.francesca').magnificPopup();
      $('.pierpaolo').magnificPopup();
      $('.simona').magnificPopup();

    	$(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    	});
    });

    $(function () {
      $('.render00').magnificPopup();
      $('.hall').magnificPopup();
      $('.facade08').magnificPopup();
      $('.modello-torre').magnificPopup();
      $('.modello-stecca').magnificPopup();
      $('.funzioni-torre').magnificPopup();
      $('.funzioni-stecca').magnificPopup();
    });


    $(document).ready(function() {
    	$('.popup-gallery').magnificPopup({
    		delegate: 'a',
    		type: 'image',
    		tLoading: 'Loading image #%curr%...',
    		mainClass: 'mfp-img-mobile',
    		gallery: {
    			enabled: true,
    			navigateByImgClick: true,
    			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    		},
    		image: {
    			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    			titleSrc: function(item) {
    				return item.el.attr('title') + '';
    			}
    		}
    	});
    });



    // Google map
    $('.maps').click(function () {
      $('.maps iframe').css("pointer-events", "auto");
    });


	skel
		.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#page-wrapper'),
			$banner = $('#banner'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Mobile?
			if (skel.vars.mobile)
				$body.addClass('is-mobile');
			else
				skel
					.on('-medium !medium', function() {
						$body.removeClass('is-mobile');
					})
					.on('+medium', function() {
						$body.addClass('is-mobile');
					});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly')
				.scrolly({
					speed: 1500,
					offset: $header.outerHeight()
				});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight() + 1,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			}

	});


})(jQuery);
