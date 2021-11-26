export default function showCharacter(root, data) {
    let {name, status, species, gender} = data;

    //Creo h1 con el nombre
    let h1 = document.createElement('h1');
    let nameObj = document.createTextNode(name);
    h1.appendChild(nameObj);

    //Creo elemento ul
    let ul = document.createElement('ul');

    //Creo li con status
    let li = document.createElement('li');
    let statusText = document.createTextNode(status);
    li.appendChild(statusText);

    ul.appendChild(li);

    //Creo li con gender
    li = document.createElement('li');
    let genderText = document.createTextNode(gender);
    li.appendChild(genderText);

    ul.appendChild(li);

    //Creo li con species
    li = document.createElement('li');
    let speciesText = document.createTextNode(species);
    li.appendChild(speciesText);
    
    ul.appendChild(li);

    //Creo contenedor con clase de col-4 para implemetar bootstrap
    let characterContainer = document.createElement('div');
    characterContainer.classList.add('col-4');
    characterContainer.classList.add('py-3');


    //Pongo info de character dentro del div con class="col-4"
    characterContainer.appendChild(h1);
    characterContainer.appendChild(ul);

    //Muestro todo en root
    root.appendChild(characterContainer);
}