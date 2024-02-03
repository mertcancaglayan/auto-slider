const radioButtons = document.querySelectorAll('.slides input[type="radio"]');
const imgContainers = document.querySelectorAll(".img-container");
const bodyElement = document.querySelector("body");


let currentcolor = getComputedStyle(bodyElement).backgroundColor;

function animateBackgroundColor(targetColor, duration) {
	bodyElement.animate(
		{ backgroundColor: [currentcolor, targetColor] },
		{
			duration: duration,
			easing: "ease",
			fill: "both",
		},
	);

	currentcolor = targetColor
	
}

let lastBtn = 0;

function slide(index) {
	const newPosition = -index * 100;

	let durationTime;

	if (index - lastBtn >= 2 && index - lastBtn < 4) {
		durationTime = 1750;
	} else if (index - lastBtn >= 4) {
		durationTime = 2250;
	} else if (index - lastBtn <= -2 && index - lastBtn > -4) {
		durationTime = 1750;
	} else if (index - lastBtn <= -4) {
		durationTime = 2250;
	} else {
		durationTime = 1250;
	}

	switch (newPosition) {
		case 0:
			animateBackgroundColor("rgba(7, 12, 14, 0.808)", durationTime);
			break;
		case -100:
			animateBackgroundColor("rgba(23, 66, 5, 0.808)", durationTime);
			break;
		case -200:
			animateBackgroundColor("rgba(112, 21, 108, 0.808)", durationTime);
			break;
		case -300:
			animateBackgroundColor("rgba(180, 125, 22, 0.808)", durationTime);
			break;
		case -400:
			animateBackgroundColor("rgba(98, 112, 117, 0.808)", durationTime);
			break;
		case -500:
			animateBackgroundColor("rgb(8, 43, 15)", durationTime);
			break;
		default:
			animateBackgroundColor("rgba(7, 12, 14, 0.808)", durationTime);
			break;
	}

	imgContainers.forEach((container) => {
		container.animate([{ transform: `translateX(${newPosition}%)` }], {
			duration: durationTime,
			fill: "forwards",
		});
	});

	lastBtn = index;
}

radioButtons.forEach((radioButton, index) => {
	radioButton.addEventListener("change", () => slide(index));
});

let counter = 1;
setInterval(() => {
	const radioButton = document.getElementById(`btn${counter}`);
	radioButton.checked = true;
	radioButton.dispatchEvent(new Event("change"));
	counter++;
	if (counter > 7) {
		counter = 1;
	}
}, 5000);
