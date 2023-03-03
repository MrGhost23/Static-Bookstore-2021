$(document).ready(function(){
    $("#search, #menu-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".book-card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
	$('div.browse-category svg').click(function() {
		$('.menu').toggleClass('menu-opened');
	});
	$('.profile-menu').click(function() {
		$('.rightmenu').addClass('rightmenu-opened')
		$('.search-bar').removeClass('d-block');
		$('.search-bar').addClass('d-none');
		$('.header, .menu, .book-slide, .main-wrapper').addClass('blur');
		
	});
	$('#close-sidebar').click(function() {
		$('.rightmenu').removeClass('rightmenu-opened');
		$('.search-bar').removeClass('d-none');
		$('.search-bar').addClass('d-block');
		$('.header, .menu, .book-slide, .main-wrapper').removeClass('blur');
	});
	$(".sidebar-dropdown > a").click(function() {
		$(".sidebar-submenu").slideUp(200);
		if (
		  $(this).parent().hasClass("active")
		) {
		  $(".sidebar-dropdown").removeClass("active");
		  $(this).parent().removeClass("active");
		} else {
		  $(".sidebar-dropdown").removeClass("active");
		  $(this)
			.next(".sidebar-submenu").slideDown(200);
		  $(this).parent().addClass("active");
		}
	  });
  });
  var App = function(){
    var root = document.querySelector(':root');
	var $ButtonMode = $('.js-page-mode-button');
	var $ButtonModeText = $('.js-page-mode-button-text');
    var Mode = function(){
		$ButtonMode.click(function(event) {
				event.preventDefault();
				var _Active = $(this).data('active');

				if (_Active == 'true') {
					_LightMode();
				}else{
					_DarkMode();
				}
			});
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				_DarkMode();
				console.log('Dark Mode');
			}else{
			_LightMode();
		    console.log('Light Mode');
		}

		function _DarkMode(){
				// Dark Mode ON
				root.style.setProperty('--body-bg-color', '#18191A');
				root.style.setProperty('--color-text', '#f8f8f8');
				root.style.setProperty('--page-bg-color', '#18191A');
        		root.style.setProperty('--card-content', '#242526');
				root.style.setProperty('--sec-border', '#424242');
				root.style.setProperty('--darknwhite', '#3a3f48');
				$ButtonModeText.text('Dark Mode');
				// Change value variable
				$ButtonMode.data('active', 'true');
				$( "input:checkbox" ).prop( "checked", true);
			}

		function _LightMode(){
				// Dark Mode OFF
				root.style.setProperty('--body-bg-color', '#fff');
				root.style.setProperty('--color-text', '#18191A');
				root.style.setProperty('--page-bg-color', '#f2f5f7');
        		root.style.setProperty('--card-content', '#f8f8f8');
				root.style.setProperty('--sec-border', '#ebedef');
				root.style.setProperty('--darknwhite', '#e9ecef');
				$ButtonModeText.text('Dark Mode');
				// Change value variable
				$ButtonMode.data('active', 'false');
				$( "input:checkbox" ).prop( "checked", false);
			}
	}
	return{
		init: function(){
            Mode();
		}
	};
}();

App.init();

