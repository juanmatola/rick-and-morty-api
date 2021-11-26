import ElementUtils from './util/ElementUtils.js';

export default function processCharacterData(data) {
    let {name, status, species, gender, image} = data;
    let info = [status, species, gender];

    let imageObj = ElementUtils.createImage(image);
    let h1 = ElementUtils.createH3(name);
    let ul = ElementUtils.createUl(info);
    
    
    let characterContainer = ElementUtils.createDiv();
    characterContainer.appendChild(imageObj);
    characterContainer.appendChild(h1);
    characterContainer.appendChild(ul);
    characterContainer.classList.add('p-3', 'bg-white', 'rounded-3','shadow');
    
    let column = ElementUtils.createColumn();
    column.appendChild(characterContainer);

    return column;
}