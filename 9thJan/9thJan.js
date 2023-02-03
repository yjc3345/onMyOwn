document.getElementById("login").onclick = function() {
    document.getElementsByClassName("modal")[0].style.display = "inline";
}
document.getElementById("x").onclick = function() {
    document.getElementsByClassName("modal")[0].style.display = "none";
}

//getElementsByClassName 말고 querySelector을 이용하면 더욱 쉽게 문제 해결 가능, 1-5파일 js보면 알 수 있음.

// document.getElementById("login").addEventListener('click', function() {
//     document.getElementsByClassName("modal").style.display = "block";
// });
// document.getElementById("x").addEventListener('click', function() {
//     document.getElementsByClassName("modal").style.display = "none";
// });