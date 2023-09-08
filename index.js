//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });
ScrollReveal().reveal(".header-image", {
	delay: 100,
	distance: "40px",
	origin: "right",
});

ScrollReveal().reveal(".hero-text", {
	delay: 50,
	origin: "left",
});

ScrollReveal().reveal(".partner-box", {
	delay: 50,
	origin: "bottom",
	interval: 700,
	distance: "100px",
});

ScrollReveal().reveal(".find, .join", {
	delay: 100,
	origin: "bottom",
	interval: 500,
});
