const request = document.getElementById("request");
const logIn = document.getElementById("LogIn");
const x = document.querySelector(".X");
const modal = document.querySelector(".modalBackground");
request.onclick= requestOnClick;
logIn.onclick= loginOnClick;
x.onclick= xOnClick;

function requestOnClick(){
    alert('오 이런');
}

function loginOnClick(){
    display("block"); 
}

function xOnClick(){
    display("none"); 
}

function display(yay){
    modal.style.display = yay;
}




// const x = document.getElementsByClassName("X");
// const modal = document.getElementsByClassName("modalBackground");

// function display(yay){
//     modal[0].style.display = yay;
// }
// x[0].onclick= xOnClick;

// ElementsByClassName을 사용하면 배열처럼 가져오기 때문에 [0]을 넣어야한다.ㅠ