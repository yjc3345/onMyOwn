//사용변수
const gameTime = 9;
let score = 0;
let time;
let isPlaying = false;
let words = [];
const wordInput = document.querySelector('.wordInput');
const wordDisplay = document.querySelector('.wordDisplay');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init() {
	getWords();
	wordInput.addEventListener('input', checkMatch);
}

function checkStatus() {
	if (isPlaying && time === 0) {
		buttonChange('게임시작');
		clearInterval(checkInterval);
	}
}

// 단어 불러오기
function getWords() {
	words = ['hello', 'apple', 'orange'];
	buttonChange('게임시작');
}

//단어 일치 체크
function checkMatch() {
	if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
		wordInput.value = '';
		if (!isPlaying) {
			return;
		}
		score++;
		scoreDisplay.innerText = score;
		time = gameTime;
	}
}
//게임 실행
function run() {
	isPlaying = true;
	time = gameTime;
	wordInput.focus();
	scoreDisplay.innerText = 0;
	timeInterval = setInterval(countDown, 1000);
	checkInterval = setInterval(checkStatus, 50);
	buttonChange('게임중');
}

function countDown() {
	//삼항연산자
	// (조건) ? 참일경우 : 거짓일경우
	time > 0 ? time-- : (isPlaying = false);
	if (!isPlaying) {
		clearInterval(timeInterval);
	}
	timeDisplay.innerText = time;
}

function buttonChange(text) {
	button.innerText = text;
	text === '게임시작'
		? button.classList.remove('loading')
		: button.classList.add('loading');
}
