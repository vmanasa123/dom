//1. ans:-
const IdCall = document.getElementById("text");
console.log(IdCall.innerText);

//2.ans:-
let second = document.getElementsByTagName("h3");
second[0].innerHTML = "This element is having a tag name";

//3.ans:-
let third = document.getElementsByClassName("box");
third[0].innerHTML = "This element is having a class name as a tag";


//4.ans:-
function textchane(params) {
    let fouth = document.getElementById('hello');
console.log(fouth.innerText);
fouth.innerText = "Hello world";
}


//5.ans:-
function change() {
    let element = document.getElementsByClassName('flex');
    console.log(element[0]);
    // element[0].style.display=flex;
    element[0].style.flexDirection = "column";

}

//7.ans:-
function stylee() {
    let second = document.getElementById("heading");
    console.log(second);
    second.style.color= "red";
}

//8.ans:-
function reply() {
    let element = document.getElementsByTagName('p');
    element[3].innerText="Welcome to Elevation academy";
    }

//9.ans:-
    function time() {
        let date=new Date();
        let hour=date.getHours()
        let minute=date.getMinutes()
        let second=date.getSeconds()
        let element = document.getElementsByClassName('hour');
        element[0].innerText=hour;
        let element1 = document.getElementsByClassName('minute');
        element1[0].innerText=minute;
        let element2 = document.getElementsByClassName('second');
        element2[0].innerText=second;   
    }
    

//10.ans:-
    setInterval(()=>{
        time()
    },1000)
    function year(){
        let fouth = document.getElementById('display');
    console.log(fouth);
    
    let fouth1 = document.getElementById('box').value;
    console.log(fouth1);
    fouth.innerText=`The user selected year is ${fouth1}
    `
    }




 






