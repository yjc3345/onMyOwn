const request = document.getElementById("request");
const logIn = document.querySelector(".LogIn");
const x = document.querySelectorAll(".X");
const modal = document.querySelectorAll(".modalBackground");
const enterLogin = document.querySelectorAll(".enterLogin");
const enterSignin = document.querySelectorAll(".enterSignin");

function enterSigninOnClick(){
    loginModalDisplay("none");
    signinModalDisplay("block");
}

function enterOnClick(){
    alert("없는 아이디 입니다.")
}

function requestOnClick(){
    alert('오 이런');
}

function loginOnClick(){
    loginModalDisplay("block"); 
    signinModalDisplay("none");
}

function xOnClick(){
    loginModalDisplay("none"); 
    signinModalDisplay("none");
}

function loginModalDisplay(yay){
    modal[0].style.display = yay;
}
function signinModalDisplay(yay){
    modal[1].style.display = yay;
}

function signedIn(){
    alert("회원가입 실패")
}

request.onclick= requestOnClick;
logIn.onclick= loginOnClick;
x[0].onclick= xOnClick;
x[1].onclick= xOnClick;
enterLogin[0].onclick= enterOnClick;
enterSignin[0].onclick= enterSigninOnClick;
enterSignin[1].onclick= signedIn;
enterLogin[1].onclick=loginOnClick;




// const x = document.getElementsByClassName("X");
// const modal = document.getElementsByClassName("modalBackground");

// function display(yay){
//     modal[0].style.display = yay;
// }
// x[0].onclick= xOnClick;

// ElementsByClassName을 사용하면 배열처럼 가져오기 때문에 [0]을 넣어야한다.ㅠ