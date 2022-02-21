// //const p = document.querySelector('#message');
// const p = document.getElementById('message');
// console.log(p);
// alert(p.textContent); //.innerHtml or .textContent can be used

// let btn = document.getElementById('btnRate');

//         btn.addEventListener('click', () => {
//             let rates = document.getElementsByName('rate');
//             rates.forEach((rate) => {
//                 if (rate.checked) {
//                     alert(`You rated: ${rate.value}`);
//                 }
//             })
//         });

//         //properties and methods
//         document.getElementById('demo').innerHTML = "Hello World";
//        //document.getElementsByClassName('head').innerHTML = "Welcome to my Page";
//         document.querySelector('.head').innerHTML = "Welcome to my Page";
       
//         //get elements by Id
//         let newElement = document.getElementById('attempt');
//         document.getElementById('para').innerHTML = "This text from the attempt heading is " + newElement.innerHTML;
        
//         //get elements by tag name
//         let x = document.getElementsByTagName('p');
//         document.getElementById('newD').innerHTML = "This text in (index 2) paragraph is: " + x[1].innerHTML;

//         let n = document.getElementsByClassName("intro");
//         document.getElementById("newPara").innerHTML = 'The first paragraph (index 0) with class="intro": ' + n[0].innerHTML;

//         //adding css styles
//         newElement.style.color = "red";
//         document.querySelector('.head').style.color = "yellow";

// Get elements by tagname
let btn = document.getElementById('btnCount');
btn.addEventListener('click', () =>{
    let headings = document.getElementsByTagName('h2');
    alert(`The number of H2 tags: ${headings.length}`);
});

let btnp = document.getElementById('btnpCount');
btnp.addEventListener('click', () =>{
    let paragraph = document.getElementsByTagName('p');
    alert(`The number of P tags: ${paragraph.length}`);
});

btn.style.background = "green";
btnp.style.background = "yellow";

let x = document.getElementsByTagName('p');
document.getElementById('new').innerHTML = "The text in index 1 paragraph is: " + x[1].innerHTML;


//get elements by className on an element
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

// let data = [].map.call(items, item => item.textContent);
// console.log(data);

//get elements by className on the document
let elements = document.getElementsByClassName('heading-secondary');

let data = [].map.call(elements, elem => elem.textContent);

console.log(data);

//Query selector
// let element = document.querySelector('*');
// alert(element.textContent);

//The following example finds the first h1 element in the document:
let firstHeading = document.querySelector('h1');

let bottomHeading = document.createElement('h1');
bottomHeading.textContent = firstHeading.textContent;
document.body.appendChild(bottomHeading);

//And the following example finds all h2 elements:
let heading2 = document.querySelectorAll('h1');
alert(heading2.textContent);
// let newHeading = document.createElement('h2');
// newHeading.textContent = heading2.textContent;
// document.body.appendChild(newHeading);


