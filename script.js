/*
* Ovo je responsive meni
*/
let menuBtn = document.querySelector('.header button');
menuBtn.addEventListener('click', () => {
	let menu = document.querySelector('.header ul');
	let btn = document.querySelector('.header button');

	menu.style.display = 'block';
	if(btn.innerText === 'CLOSE'){
		btn.innerText = 'MENU'
		menu.style.display = 'none';
	} else {
		btn.innerText = 'CLOSE';		
	}
});
/*
* Ovo je galerija
*/

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
	if(imgNum === pictures.length-1){
		pictures[imgNum].style.display = 'none';
		imgNum = 0;
		pictures[imgNum].style.display = 'block';
	} else {
		pictures[imgNum].style.display = 'none';
		imgNum ++;
		pictures[imgNum].style.display = 'block';
	}
}

const moveLeft = () => {
	if(imgNum === 0){
		pictures[imgNum].style.display = 'none';
		imgNum = pictures.length-1;
		pictures[imgNum].style.display = 'block';
	} else {
		pictures[imgNum].style.display = 'none';
		imgNum --;
		pictures[imgNum].style.display = 'block';
	}
}

// Event listeneri za strelice

rightBtn.addEventListener('click', moveRight);

leftBtn.addEventListener('click', moveLeft);

/*
* Portfolio
*/

let sveBtn = document.querySelector('.portfolio-categories .sve');
let restoraniBtn = document.querySelector('.portfolio-categories .brown');
let hoteliBtn = document.querySelector('.portfolio-categories .blue');
let korporacijeBtn = document.querySelector('.portfolio-categories .green');
let fastFoodBtn = document.querySelector('.portfolio-categories .yellowgreen');
let moteliBtn = document.querySelector('.portfolio-categories .yellow');
let ostaloBtn = document.querySelector('.portfolio-categories .rose');



const sort = (event) => {
	let portfolioItems = document.querySelectorAll('.portfolio-single-item');
	let category = event.getAttribute('data-category');
	console.log(category);
	portfolioItems.forEach((item) => {
		item.style.display = 'none';
	});
	portfolioItems.forEach((item) => {
		let eachCategory = item.getAttribute('data-category');
		if(eachCategory.includes(category)){
			item.style.display = 'block';
		} 
	});
}

sveBtn.addEventListener('click', () => {
	let portfolioItems = document.querySelectorAll('.portfolio-single-item');
	let category = sveBtn.getAttribute('data-category');
	portfolioItems.forEach((item) => {
			item.style.display = 'block';
		});
});

restoraniBtn.addEventListener('click', () => {
	sort(restoraniBtn);
});

hoteliBtn.addEventListener('click', () => {
	sort(hoteliBtn);
});

korporacijeBtn.addEventListener('click', () => {
	sort(korporacijeBtn);
});

fastFoodBtn.addEventListener('click', () => {
	sort(fastFoodBtn);
});

moteliBtn.addEventListener('click', () => {
	sort(moteliBtn);
});

ostaloBtn.addEventListener('click', () => {
	sort(ostaloBtn);
});

/*
* Modal button
*/

let firstBtn = document.querySelector('#first-button');
let secondBtn = document.querySelector('#second-button');

firstBtn.addEventListener('click', () => {
	let modalWindow = document.querySelector('#first-modal');
	let overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'block';
	overlay.style.display = 'block';
});

secondBtn.addEventListener('click', () => {
	let modalWindow = document.querySelector('#second-modal');
	let overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'block';
	overlay.style.display = 'block'
});

/*
* Zatvaramo modal
*/

let firstCloseBtn = document.querySelector('#closeFirstModal');
let secondCloseBtn = document.querySelector('#closeSecondModal');

firstCloseBtn.addEventListener('click', () => {
	let modalWindow = document.querySelector('#first-modal');
	let overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'none';
	overlay.style.display = 'none';
});

secondCloseBtn.addEventListener('click', () => {
	let modalWindow = document.querySelector('#second-modal');
	let overlay = document.querySelector('.overlay');

	modalWindow.style.display = 'none';
	overlay.style.display = 'none'
});