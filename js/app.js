/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navData = document.querySelectorAll('[data-nav]');
const navBarList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const buildMenuItem = function (element) {
	var menuItem = document.createElement('li');
	menuItem.innerHTML = element.querySelector('h2').textContent;
	menuItem.classList.add('menu__link');
	menuItem.setAttribute('data-nav', element.querySelector('h2').textContent); // Maybe make this better
	navBarList.appendChild(menuItem);
};

const elementInScrollTop = function (element, windowOffset, elementOffsetTop, elementOffsetBottom) {
	const relatedNav = document.querySelector(`.menu__link[data-nav='${element.getAttribute('data-nav')}']`);
	if ( (windowOffset >= elementOffsetTop) && (windowOffset <= elementOffsetBottom) ) {
		element.classList.add('your-active-class');
		relatedNav.classList.add('active');
	} else {
		element.classList.remove('your-active-class');
		relatedNav.classList.remove('active');
	}
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (const element of navData) {
    buildMenuItem(element);
};


// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
const navElements = document.getElementsByClassName('menu__link');
for (const element of navElements) {
	const relatedContent = document.querySelector(`section[data-nav='${element.getAttribute('data-nav')}']`);
	element.addEventListener('click', function() {
	    window.scrollTo({
	         top: relatedContent.offsetTop+1,
	         behavior: "smooth"
	    });
	});
}


// Set sections as active
window.addEventListener('scroll', function() {
	for (const element of navData) {
		const windowOffset = window.pageYOffset;
		const elementOffsetTop = element.offsetTop;
		const elementOffsetBottom = element.offsetTop + element.offsetHeight;
		elementInScrollTop(element, windowOffset, elementOffsetTop, elementOffsetBottom);
	}
});
