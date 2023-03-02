//사용변수
let score = 0;
let time = 9;
let isPlaying = false;

const wordInput = document.querySelector('.wordInput');
const wordDisplay = document.querySelector('.wordDisplay');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('button');

wordInput.addEventListener('input', () => {
	if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
		score++;
		scoreDisplay.innerHTML = score;
		wordInput.value = '';
	}
});

buttonChange('게임시작');

function run() {
	timeInterval = setInterval(countDown, 1000);
}

function countDown() {
	//삼항연산자
	// (조건) ? 참일경우 : 거짓일경우
	time > 0 ? time-- : (isPlaying = false);
	timeDisplay.innerText = time;
}

function buttonChange(text) {
	button.innerText = text;
	text === '게임시작'
		? button.classList.remove('loading')
		: button.classList.add('loading');
}
