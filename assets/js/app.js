'use strict';

const linkItem = $('.link')

const iconMenu = $('#icon-toggle')
const menuToggle = $('#menu-responsive-back')

iconMenu.on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).toggleClass('active')
	menuToggle.toggleClass('active')
});



linkItem.on('click', function(e) {
	e.preventDefault()
	$(this).toggleClass('active')
	$(this).parent().siblings('.item-menu').children('.link').removeClass('active')
});

const aboutTop = $('#about').scrollTop()

$(window).on('scroll', (e)=>{
	console.log($(this).scrollTop())
	console.log(aboutTop)
});




