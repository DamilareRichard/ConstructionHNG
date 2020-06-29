function onClickMenu(){

	document.getElementById('menu').classList.toggle('change');

	document.getElementById('nav-links').classList.toggle('change');

	document.getElementById('menu-bg').classList.toggle('change-bg');


}

// const scroll = new SmoothScroll('.nav-links a[href*="#"]',{
// 	speed: 300 

// });

// $('.nav-links a').on('click', function(e){

// 	if(this.hash !== '') {
// 	e.preventDefault();

// 	const hash = this.hash;

// 	$('html, body').animate({
// 		scrollTop: $(hash).offset().top
// 	}, 
// 	800
// 	);

// }
// });