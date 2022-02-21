const nameInput = document.querySelector('#name');
const aboutInput = document.querySelector('#about');
const skillSetInput = document.querySelector('#skill-set');
const avatarInput = document.querySelector('#avatar');
const button = document.querySelector('#submit-button');
const cardHolder = document.querySelector('.card-holder');
const readMoreButton = document.querySelector('.readMore-button');
let formArray = [];
button.addEventListener('click', (e) =>{

        let name = nameInput.value;
        let about = aboutInput.value;
        let skillset = skillSetInput.value;
        let avatar = avatarInput.value;

        let formObject = {
            name: name,
            about: about,
            skillset: skillset,
            avatar: avatar
        };

        formArray.push(formObject);
        console.log(formArray);
        createCard(name, about, skillset, avatar);
        
        e.preventDefault();
        resetInput();
        
})

 function resetInput(){
    nameInput.value = '';
    aboutInput.value = '';
    avatarInput.value = '';
    skillSetInput.value = '';

}



function createCard(name, about, skill, avatar){

// <div class="card">
//     <img src="https://images.unsplash.com/photo-1621570170697-3ca34feb14aa?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="">

//     <div class="skill-set">
//         <span>CSS</span>  <span>C#</span>    <span>Javascript</span>
//     </div>
//     <p>Oliseyenum Jennifer</p>
//     <p>I am Jennifer</p>

//     <div class="button-holder">
//         <button>Read More</button>
//     </div>
// </div>

let cardDiv = document.createElement('div');
cardDiv.setAttribute('class', 'card');

let img = document.createElement('img');
img.src = avatar;

let skillSetDiv = document.createElement('div');
skillSetDiv.setAttribute('class', 'skill-set');

let skills = skill.split(",");
for (i = 0; i < skills.length; i++){
    let span = document.createElement('span');
    span.textContent = skills[i];
    skillSetDiv.append(span);
}

let h2 = document.createElement('h2');
h2.textContent = name;
let p = document.createElement('p');
p.textContent = about;

let buttonHolderDiv = document.createElement('div');
buttonHolderDiv.setAttribute('class', 'button-holder');

let buttonHolder = document.createElement('button');
buttonHolder.textContent = "Read More";
buttonHolderDiv.append(buttonHolder);

buttonHolder.addEventListener('click', () =>{
    alert("Thank you " + name);
})


    cardDiv.append(img);
    cardDiv.append(skillSetDiv);
    cardDiv.append(h2);
    cardDiv.append(p);
    cardDiv.append(buttonHolderDiv);
    cardHolder.append(cardDiv);


    readMoreButton.addEventListener('click', () =>{
        alert("Thank you " + name);
    })

}
