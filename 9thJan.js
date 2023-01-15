const logIn=document.getElementById("login");
const loginModal=document.getElementsByClassName("modal");
const noModal=document.getElementById("x");

logIn.onclick = function() {
    loginModal.style.display = "block";
}
noModal.onclick = function() {
    loginModal.style.display = "none";
}


