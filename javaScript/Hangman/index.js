const alpha = document.getElementsByClassName("alphabet")
const alphaBtn = document.createElement("button")

function alphabet (i){
    let abc = String.fromCharCode(i+65)
}
console.log(alphabet(9))

for(num=0 ; num <= 25; num++){
    alphabet(num);
    const letters = document.createTextNode(abc);
    alphaBtn.appendChild(letters);
}

