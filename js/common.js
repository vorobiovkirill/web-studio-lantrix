$(document).ready(function () {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "https://lantrix.com.ua/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Ваше сообщение было успешно доставлено");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

// // -----------------------------
// выпадающее меню при наведении, по клику убрать hover: true
// Документация http://materializecss.com/navbar.html
// --------------------------------
$(".dropdown-button").dropdown({
	inDuration: 600,
	outDuration: 350,
	belowOrigin: true,
	// gutter: 0,
	constrain_width: false,
	hover: true
});

// // -----------------------------
// Инициализация "Materialize Mobile Side Nav Menu"
// Документация http://materializecss.com/navbar.html
// // -----------------------------
$(".button-collapse").sideNav({
	menuWidth: 285,
	// edge: 'right', что бы вылазило справа
	closeOnClick: true
});

// // -----------------------------
// Инициализация "Materialize TABS CSS"
// Документация http://materializecss.com/tabs.html
// // -----------------------------
$('ul.tabs').tabs();

// // -----------------------------
// Инициализация "Materialize Collapsible CSS"
// Документация http://materializecss.com/collapsible.html
// // -----------------------------
$('.collapsible').collapsible({
			accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		});

// // -----------------------------
// Инициализация селекта в форме
// http://materializecss.com/forms.html
// // -----------------------------
$('select').material_select();

// // -----------------------------
// Инициализация счетчика
// Документация https://github.com/mhuggins/jquery-countTo
// // -----------------------------
$('.number').appear(function() {
	$('.number').countTo();
});

// // -----------------------------
// Инициализация WOW JS
// Документация https://github.com/matthieua/WOW
// // -----------------------------
var wow = new WOW(
{
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       50,          // distance to the element when triggering the animation (default is 0)
		mobile:       false,       // trigger animations on mobile devices (default is true)
		live:         true,       // act on asynchronously loaded content (default is true)
		callback:     function(box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null // optional scroll container selector, otherwise use window
	}
	);
wow.init();

// // -----------------------------
// Инициализация ToTop
// Документация https://github.com/sksmatt/UItoTop-jQuery-Plugin
// // -----------------------------
$().UItoTop({
	easingType: 'easeInQuint',
	containerClass: 'toTop'
});

// // -----------------------------
// Replace all SVG images with inline SVG
// // -----------------------------
$('img.img-svg').each(function(){
	var $img = $(this);
	var imgID = $img.attr('id');
	var imgClass = $img.attr('class');
	var imgURL = $img.attr('src');

	$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

});

});
