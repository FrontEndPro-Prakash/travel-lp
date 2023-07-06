/*---Start Client logo slider---*/
$('#client-logo').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots: false,
	responsive:{
		0:{
			items:2
		},
		500:{
			items:4
		},
		1000:{
			items:4
		}
	}
})
/*---End Client logo slider---*/

/*---Start We cover all slider---*/
$('#cover-cities').owlCarousel({
	loop:true,
	margin:0,
	nav:true,
	dots: false,
	responsive:{
		0:{
			items:1
		},
		400:{
			items:2
		},
		1000:{
			items:3
		}
	}
})
/*---End We cover all slider---*/

/*---Start About slider---*/
$(document).ready(function() {
	var bigimage = $("#slider-images");
	var thumbs = $("#slider-thumbs");
	//var totalslides = 10;
	var syncedSecondary = true;
	bigimage
		.owlCarousel({
		items: 1,
		slideSpeed: 3000,
		nav: false,
		autoplay: true,
		dots: false,
		loop: true,
		animateOut: 'fadeOut',
		responsiveRefreshRate: 500,
		navText: [
		  '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
		  '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
		]
	})
    .on("changed.owl.carousel", syncPosition);

	thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
		.find(".owl-item")
		.eq(0)
		.addClass("current");
	})
    .owlCarousel({
		margin:8,
		dots: false,
		nav: false,
		navText: [
		  '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
		  '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
		],
		smartSpeed: 200,
		slideSpeed: 500,
		slideBy: 4,
		responsive:{
			0:{
				items:2
			},
			350:{
				items:3
			},
			475:{
				items:4
			},
			1000:{
				items:5
			}
		}
	})
    .on("changed.owl.carousel", syncPosition2);

	function syncPosition(el) {
		//if loop is set to false, then you have to uncomment the next line
		//var current = el.item.index;

		//to disable loop, comment this block
		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

		if (current < 0) {
		  current = count;
		}
		if (current > count) {
		  current = 0;
		}
		//to this
		thumbs
		  .find(".owl-item")
		  .removeClass("current")
		  .eq(current)
		  .addClass("current");
		var onscreen = thumbs.find(".owl-item.active").length - 1;
		var start = thumbs
		.find(".owl-item.active")
		.first()
		.index();
		var end = thumbs
		.find(".owl-item.active")
		.last()
		.index();

		if (current > end) {
		  thumbs.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
		  thumbs.data("owl.carousel").to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
		  var number = el.item.index;
		  bigimage.data("owl.carousel").to(number, 100, true);
		}
	}

	thumbs.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		bigimage.data("owl.carousel").to(number, 300, true);
	});
});
/*---End About slider---*/
/*---Start menu slider---*/
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").toggleClass("view");
	$("body").toggleClass("overflow-sidebar");
});
$(".open-service-sidebar").click(function(){
	$(".service-sidebar").toggleClass("view");
	$("body").toggleClass("overflow-sidebar");
});
$(".vehicles_sidebar_btn").click(function(){
	$(".vehicles_sidebar").toggleClass("view");
	$(".vehicles_sidebar_ovrly").show();
	$("body").toggleClass("overflow-sidebar");
});
$(".vehicles_sidebar_ovrly").click(function(){
	$(".vehicles_sidebar_ovrly").hide();
	$(".vehicles_sidebar").removeClass("view");
	$("body").toggleClass("overflow-sidebar");
});
/*---End menu slider---*/
/*---Start Sticky slider---
$(window).scroll(function(){
	var sticky = $('.sticky'),
	scroll = $(window).scrollTop();
	if (scroll >= 1) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});
---End Sticky slider---*/

/* filter review */
$(document).ready(function() {
  $('#filterOptions li a').click(function() {
    // fetch the class of the clicked item
    var ourClass = $(this).attr('class');

    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');
    // update the active state on our clicked button
    $(this).parent().addClass('active');

    if(ourClass == 'all') {
      // show all our items
      $('#ourHolder').children('li.filter_item').show();
    }else{
      // hide all elements that don't share ourClass
      $('#ourHolder').children('li:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#ourHolder').children('li.' + ourClass).show();
    }
    return false;
  });
});
/* /filter review */
