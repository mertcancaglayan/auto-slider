const radioButtons = document.querySelectorAll('.slides input[type="radio"]');
const imgContainers = document.querySelectorAll(".img-container");

let lastBtn = 0

radioButtons.forEach((radioButton, index) => {
	radioButton.addEventListener("change", () => {
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
        
        console.log(durationTime)
		imgContainers.forEach((container) => {
			container.animate([{ transform: `translateX(${newPosition}%)` }], {
				duration: durationTime,
				fill: "forwards",
			});
		});

		lastBtn = index;
	});
});
