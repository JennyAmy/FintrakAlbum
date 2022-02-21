
//Selecting the inputs (search)
const submitButton = document.querySelector('#submit');
const nameInput = document.querySelector('#name');
const aboutInput = document.querySelector('#about');
const skillInput = document.querySelector('#skill');
const avatarInput = document.querySelector('#avatar');
const cardHolder = document.querySelector('#cards-holder');
//A collection of trainees
let trainees =[];

submitButton.addEventListener('click', function(e) {
    const name = nameInput.value;
    const about = aboutInput.value;
    const skills = skillInput.value;
    const avatar = avatarInput.value;
    
    //Putting the values inside an object
    const trainee ={name: name, about: about, skills: skills, avatar: avatar }

     //pushing the values inside an array
     console.log(trainee);
     trainees.push(trainee);

     createCard(name, about, skills, avatar);
     
     
    //   //Resetting the input values
    //  nameInput.value = ' ';
    //  aboutInput.value = ' ';
    //  skillInput.value = ' ';
    //  avatarInput.value = ' '; // Extract/convert all these into a function
    resetInput();
 
  
     e.preventDefault();
})


function createCard(name, about, skills, avatar){
    // <div class="card">
    //                 <img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="picture">
    //                 <div class="skill-set">
    //                     <span>HTML</span><span>CSS</span><span>Angular</span>
    //                 </div>
    //                 <h2> Oliseyenum Jennifer</h2>
    //                 <p>I am a girl</p>

    //                 <div class="button-wrapper">
    //                     <button>Read More</button>
    //                 </div>
    //             </div>


const parentDiv = document.createElement('div');
    parentDiv.setAttribute('class', 'card');

    const img = document.createElement('img');
    img.setAttribute('src', avatar);

    const skillsDiv = document.createElement('div');
    skillsDiv.setAttribute('class', 'skill-set');
    
        const skill = skills.split(",");
        for(let i = 0; i < skill.length; i++){
            const span = document.createElement('span');
            span.textContent = skill[i];
            skillsDiv.append(span);
        }

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const p = document.createElement('p');
    p.textContent = about;


     //add the read more button
    //the name of the user should pop up when clicked
    
    // <div class="button-wrapper">
         //  <button>Read More</button>
    //  </div>
    const readMoreDiv = document.createElement('div');
    readMoreDiv.setAttribute('class', 'button-wrapper');
    const button = document.createElement('button');
    button.textContent = "Read More...";
    readMoreDiv.append(button);
    
    button.addEventListener('click', () => {
       alert( "Thank you " + name);                 
    });



    parentDiv.append(img);
    parentDiv.append(skillsDiv);
    parentDiv.append(h2);
    parentDiv.append(p);
    parentDiv.append(readMoreDiv);
    cardHolder.append(parentDiv);
}

function resetInput(){
    nameInput.value = '';
    aboutInput.value = '';
    skillInput.value = '';
    avatarInput.value = '';
}



