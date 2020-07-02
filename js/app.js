function onClickMenu(){

	document.getElementById('menu').classList.toggle('change');

	document.getElementById('nav-links').classList.toggle('change');

	document.getElementById('menu-bg').classList.toggle('change-bg');


}

const carouselSlider = document.querySelector('.slider');
const carouselImages = document.querySelectorAll('.slider img');



const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');


// let counter = 0;
// const size = carouselImages[0].clientWidth;

// carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 

// nextBtn.addEventListener('click',()=> {
// 		if (counter >= carouselImages.length - 1) return;
// 		carouselSlider.style.transition = 'transform 0.5s ease';
// 		counter++;

// 		carouselSlider.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// 	});

// 	prevBtn.addEventListener('click', () => {
// 		if (counter = 0) return;
// 		carouselSlider.style.transition = 'transform 0.5s ease';
// 		counter--;

// 		carouselSlider.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// 	});

	// carouselSlider.addEventListener('transitionend', () => {
	// 	if (carouselImages[counter].id === '') {
	// 		carouselSlider.style.transition ='none';
	// 		counter = carouselImages.length - 2;
	// 		carouselSlider.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	// 	}

	// 	if (carouselImages[counter].id === '') {
	// 		carouselSlider.style.transition ='none';
	// 		counter = carouselImages.length - counter;
	// 		carouselSlider.style.transform = 'translateX(' + (-size * counter ) + 'px)';

	// 	}
	// });
















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