Name = "Mike";
age = 30;

// // alert(Name);

// console.log(age);

// const message = "My name is "+ Name; 
// console.log(message);

//Nan = Not a number
//Boolean
    const a = true;
    const b = false;

    console.log(Name == "Mike")
    console.log(age > 40)
//typeof 연산자
    const firstName = "Mike";

    console.log(typeof 3) //number
    console.log(typeof firstName) //string
    console.log(typeof true) //boolean
    console.log(typeof "xxx") //string
    console.log(typeof null) //object 객체형: null은 객체가 아니지만 객체형으로 표기됨
    console.log(typeof undefined) //undefined

//prompt
    const lastName = prompt("Last name을 적어주세요.");
    const isMan = confirm("당신은 남성입니까?");
    const Married = confirm("결혼은 하셨나요?");

    if  (isMan === true) {
        alert("Welcome, Mr." + lastName);
    } else if (Married === false){
        alert("Welcome, Ms." + lastName);
    } else {
        alert("Welcome, Mrs." + lastName);
    }



