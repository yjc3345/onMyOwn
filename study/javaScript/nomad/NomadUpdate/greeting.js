const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
//  form 태그에서 submit를 이용하면 onclick이벤트가 필요 없음.
//  const loginButton = document.querySelector('#login-form button');
//  loginButton.addEventListener('click', onLoginBtnClick);

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const usernameTyped = loginInput.value;
	localStorage.setItem(USERNAME_KEY, usernameTyped);
	paintGreetings(usernameTyped);

	// 아래의 내용은 HTML에서 form 태그를 이용하면 쉽게 가능하다.
	// 	if (username === '') {
	// 		alert('Please enter your name');
	// 	} else if (username.length > 15) {
	// 		alert('your name is too long');
	// 	}
}
function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
