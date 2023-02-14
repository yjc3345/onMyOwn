const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

//  form 태그에서 submit를 이용하면 onclick이벤트가 필요 없음.
//  const loginButton = document.querySelector('#login-form button');
//  loginButton.addEventListener('click', onLoginBtnClick);

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add('hidden');
	const username = loginInput.value;
	localStorage.setItem('username', username);
	greeting.classList.remove('hidden');
	greeting.innerText = `Hello ${username}`;

	// 아래의 내용은 HTML에서 form 태그를 이용하면 쉽게 가능하다.
	// 	if (username === '') {
	// 		alert('Please enter your name');
	// 	} else if (username.length > 15) {
	// 		alert('your name is too long');
	// 	}
}

loginForm.addEventListener('submit', onLoginSubmit);
