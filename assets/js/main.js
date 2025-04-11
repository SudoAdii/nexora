"use strict";

//===== Preloader
window.onload = function () {
	window.setTimeout(fadeout, 500);
};

function fadeout() {
	document.querySelector('.preloader').style.opacity = '0';
	document.querySelector('.preloader').style.display = 'none';
}

/*=====================================
Sticky
=======================================*/
window.onscroll = function () {
	const header_navbar = document.querySelector(".navbar-area");
	const sticky = header_navbar.offsetTop;

	if (window.pageYOffset > sticky) {
		header_navbar.classList.add("sticky");
	} else {
		header_navbar.classList.remove("sticky");
	}

	// Show or hide the back-to-top button
	const backToTop = document.querySelector(".scroll-top");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		backToTop.style.display = "block";
	} else {
		backToTop.style.display = "none";
	}
};

// Section menu active
function onScroll(event) {
	const sections = document.querySelectorAll('.page-scroll');
	const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
	const scrollTopMinus = scrollPos + 73;

	sections.forEach((currLink) => {
		const val = currLink.getAttribute('href');
		const refElement = document.querySelector(val);
		if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
			document.querySelectorAll('.page-scroll').forEach(link => link.classList.remove('active'));
			currLink.classList.add('active');
		} else {
			currLink.classList.remove('active');
		}
	});
}
window.document.addEventListener('scroll', onScroll);

// Close navbar-collapse when a link is clicked
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

document.querySelectorAll(".page-scroll").forEach(e =>
	e.addEventListener("click", () => {
		navbarToggler.classList.remove("active");
		navbarCollapse.classList.remove('show');
	})
);

navbarToggler.addEventListener('click', function () {
	navbarToggler.classList.toggle("active");
});

// WOW active
new WOW().init();

// Countdown Timer - from 14 minutes and 8 seconds
const countDownClock = (minutes = 0, seconds = 0) => {
	const d = document;
	const daysElement = d.querySelector('.days');
	const hoursElement = d.querySelector('.hours');
	const minutesElement = d.querySelector('.minutes');
	const secondsElement = d.querySelector('.seconds');

	const totalSeconds = (minutes * 60) + seconds;

	function timer(seconds) {
		const now = Date.now();
		const then = now + seconds * 1000;

		const countdown = setInterval(() => {
			const secondsLeft = Math.round((then - Date.now()) / 1000);

			if (secondsLeft <= 0) {
				clearInterval(countdown);
				displayTimeLeft(0);
				return;
			}

			displayTimeLeft(secondsLeft);
		}, 1000);
	}

	function displayTimeLeft(seconds) {
		daysElement.textContent = Math.floor(seconds / 86400);
		hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
		minutesElement.textContent = Math.floor((seconds % 3600) / 60);
		secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	}

	timer(totalSeconds);
};

// Initialize the countdown with 14 minutes and 8 seconds
countDownClock(14, 8);
