const radioButtons = document.querySelectorAll('.slides input[type="radio"]');
const imgContainers = document.querySelectorAll(".img-container");

let lastBtn = 0;

function slide(index) {
	const newPosition = -index * 100;

	let durationTime;

	if (index - lastBtn >= 2 && index - lastBtn < 4) {
		durationTime = 1000;
	} else if (index - lastBtn >= 4) {
		durationTime = 1500;
	} else if (index - lastBtn <= -2 && index - lastBtn > -4) {
		durationTime = 1000;
	} else if (index - lastBtn <= -4) {
		durationTime = 1500;
	} else {
		durationTime = 500;
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
