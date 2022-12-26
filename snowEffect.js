// Snow Effect (Squares going up )
// The squares have to go slowly to the top and must move away from the cursor

let snowEffect = () => {
	let canvas = document.getElementById('snowEffect');
	let ctx = canvas.getContext('2d');
	let w = canvas.width = window.innerWidth;
	let h = canvas.height = window.innerHeight;
	let cursorX = 0;
	let cursorY = 0;
	let numFlakes = 100;
	let flakes = [];
	let minSize = 3;
	let maxSize = 4;
	let minSpeed = 1;
	let maxSpeed = 2;
	let snowColor = '#fff';

	window.addEventListener('mousemove', (e) => {
		cursorX = e.clientX;
		cursorY = e.clientY;
	});

	function createFlakes() {
		for (let i = 0; i < numFlakes; i++) {
			let x = Math.round(Math.random() * w);
			let y = Math.round(Math.random() * h);
			let size = Math.round(Math.random() * (maxSize - minSize) + minSize);
			let speed = Math.round(Math.random() * (maxSpeed - minSpeed) + minSpeed);
			flakes.push({
				x,
				y,
				size,
				speed
			});
		}
	}

	function drawFlakes() {
		for (let i = 0; i < numFlakes; i++) {
			let flake = flakes[i];
			ctx.fillStyle = snowColor;
			ctx.fillRect(flake.x, flake.y, flake.size, flake.size);
		}
		moveFlakes();
	}

	function moveFlakes() {
		for (let i = 0; i < numFlakes; i++) {
			let flake = flakes[i];
			flake.y -= flake.speed;
			if (flake.y <= 0) {
				flake.y = h;
			}
			if (flake.x <= cursorX + 350 && flake.x >= cursorX - 30) {
				if (flake.y <= cursorY + 30 && flake.y >= cursorY - 30) {
					flake.y = h;
				}
			}
		}
	}

	function update() {
		ctx.clearRect(0, 0, w, h);
		drawFlakes();
		requestAnimationFrame(update);
	}

	createFlakes();

	update();

};

snowEffect();
