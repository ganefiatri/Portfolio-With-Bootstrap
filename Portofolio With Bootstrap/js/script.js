// event pada saat link di klik
$('.page-scroll').on('click', function(){


	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);
	// $('body').scrollTop('0');
	// ambil isi href
	// var href = $(this).attr('href');
	// // tangkap elemen ybs
	// var elemenTujuan = $(tujuan);
	// // pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	 // e.preventDefault();

});

// parallax
// about
$(window).on('load', function(){
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});



$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	// console.log(wScroll);
	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// portfolio
	if (wScroll > $('.portfolio').offset().top - 200 ) {
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
			 $('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});

		// console.log('ok');
		// $('.portfolio .thumbnail').addClass('muncul');
	}
});











