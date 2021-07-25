
'use strict';
// Declare bindings;
let dropBtn = document.querySelector('.dropdown');
let dropBtnC = document.querySelector('.dropdown');

let dropList = document.querySelector('.nav-wrapper-item');
let dropListStyle = dropList.style;


const mediaQueryM = window.matchMedia('(max-width: 768px)')
const mediaQueryP = window.matchMedia('(min-width: 768px)')


let overlay = document.querySelector('.dropdown-overlay');
const overAdd = () => overlay.classList.remove('hidden');
const OverRem = () => overlay.classList.add('hidden');

let dropListLinks = document.querySelectorAll('.nav-list-item');


for(let i = 0; i < dropListLinks.length; i++){
	dropListLinks[i].addEventListener('click', () => {
		console.log(dropListLinks[i]);
		if(mediaQueryM.matches){
			dropListStyle.width = '0px';
			dropAddReset();
			
		dropRemoveDropClick();
		}
		
		
	})
}

// overlay.addEventListener('click', () => {
	// 
	
// });
overlay.addEventListener('click', () => {
	OverRem();
	dropListStyle.width = '0px';
	dropAddReset();
		dropRemoveDropClick();
});

//Declare funtions;
const dropRemoveReset = () => dropBtn.classList.remove('dropdown-reset') ;

const dropAddReset = () => dropBtn.classList.add('dropdown-reset') ;

const dropRemoveDropClick = () => dropBtn.classList.remove('dropdown-click');

const dropAddDropClick = () => dropBtn.classList.add('dropdown-click');

//Declare High Order Functions;
const dropDownF = () =>{
	if(dropBtn.classList.contains('dropdown-reset','dropdown')) {
		dropRemoveReset();
		dropAddDropClick();
		dropListStyle.width = '200px';
		overAdd();
	}
	else if(dropBtn.classList.contains('dropdown-click','dropdown')) {
		dropAddReset();
		dropRemoveDropClick();
		dropListStyle.width = '0px';
		OverRem();
	}
	else if(dropBtn.classList.contains('dropdown-click')) {
		dropRemoveDropClick();
		dropListStyle.width = '0px';
		
	}
	else if(!dropBtn.classList.contains('dropdown-click')){
		dropBtn.classList.add('dropdown-click');
		dropListStyle.width = '200px';
		overAdd();
	}
};
//Declare Event Listenrs;
dropBtn.addEventListener('click', dropDownF );
dropBtn.addEventListener('click', function(){
	console.log('hii')
} );

