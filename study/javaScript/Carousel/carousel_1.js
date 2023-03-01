// document.querySelector('.button1').addEventListener('click', function () {
// 	document.querySelector('.container').style.transform = 'translateX(0vw)';
// });
// document.querySelector('.button2').addEventListener('click', function () {
// 	document.querySelector('.container').style.transform = 'translateX(-80vw)';
// });
// document.querySelector('.button3').addEventListener('click', function () {
// 	document.querySelector('.container').style.transform = 'translateX(-160vw)';
// });
// document.querySelector('.button4').addEventListener('click', function () {
// 	document.querySelector('.container').style.transform = 'translateX(-240vw)';
// });

// const button = document.querySelectorAll('.button');
// const container = document.querySelector('.container');

// for (i = 0; i < button.length; i++) {
// 	button[i].addEventListener('click', transform);
// 	console.log(i);
// }
// function transform() {
// 	container.style.transform = `translateX(calc(-80 * ${i}vw))`;
// 	console.log(i);
// }

const buttons = document.querySelectorAll('.button');
const container = document.querySelector('.container');

const main = async () => {
	Array.from(buttons).map((button, i) => {
		button.addEventListener('click', () => {
			container.style.transform = `translateX(calc(-80 * ${i}vw))`;
		});
	});
	await Promise.all(buttons);
};

main();
