//alert("Hello World");
//Dom means Document object model
//A collection of nodes e.g html, head, img, section, body etc
// You can manipulate the content of the page with DOM
//let h1 = document.querySelector('h1'); //for searching for items inside the document
//console.log(h1);
//find html elements
// let h1 = document.querySelector('.title');


// setTimeout(()=>{
//     h1.textContent = "This is a changed content"
// },6000);

// //create new elements
// let img = document.createElement('img');
// img.src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
// document.body.appendChild(img);

// let ul = document.createElement('ul');


// let l1 = document.createElement('li');
// l1.textContent = "Aresenal";

// ul.appendChild(l1);

// let l2 = document.createElement('li');
// l2.textContent = "Chelsea";

// ul.appendChild(l2);

// let l3 = document.createElement('li');
// l3.textContent = "ManU";

// ul.appendChild(l3);

// let l4 = document.createElement('li');
// //set attribute
// l4.setAttribute('class','Liverpool');
// l4.textContent = "Liverpool";
// //add event listener
// let counter = 0;
// l4.addEventListener('click', ()=>{
//     l4.toggleAttribute('class');
//     counter++;
//     console.log("Liverpool was clicked " + counter + " times");
// })

// ul.appendChild(l4);
// document.body.appendChild(ul);



const ul = document.querySelector('ul');
//console.log(ul);

const li5 = document.createElement('li');
const text = document.createTextNode('Item 5');
li5.append(text);

ul.append(li5);

li5.addEventListener('click', e =>{
    e.target.remove();
    
})

let a = document.createElement('a');
a.setAttribute('href', 'https://arsenal.com');
a.textContent = "Arsenal";
document.querySelector('body').append(a);

console.log(ul.childNodes);

// const li = document.querySelector('li');
// console.log(li.parentNode);

// console.log(li.nextSibling);