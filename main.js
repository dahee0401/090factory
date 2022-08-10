$(document).ready(function () {
	// fullpage customization
	$('#fullpage').fullpage({
		sectionSelector: '.section',
		navigation: true,
		slidesNavigation: true,
		css3: true,
		controlArrows: false,

		afterLoad: function (anchorLink, index) {
			$('.section').animate({ opacity: 1 }, 2500, 'linear')
		},
	})

	//left menu 활성화
	const $leftMenu = $('#left_menu>li')
	const $callMenu = $('.call_mnu')
	const $bankMenu = $('.bank_mnu')
	let mnuIdx = $leftMenu.index()
	console.log(mnuIdx)
	$leftMenu.on('click', function () {
		$(this).children('.category').stop().slideToggle(300)
		$(this).siblings().children('.category').stop().slideUp(300)
	})

	$callMenu.on('click', function () {
		$(this).children('ul').stop().slideToggle()
		$(this).siblings().children('ul').stop().slideUp(300)
	})
	$bankMenu.on('click', function () {
		$(this).children('ul').stop().slideToggle()
		$(this).siblings().children('ul').stop().slideUp(300)
	})

	// right menu
	const $rightMnu = $('#side_on a')
	const $Mnubg = $('.tuxedo_bg')
	const $clse = $('.tuxedo-menu .close_btn2')
	$rightMnu.on('click', function (e) {
		e.preventDefault()
		$Mnubg.fadeIn(500)
	})
	$clse.on('click', function () {
		$Mnubg.fadeOut(500)
	})
})
