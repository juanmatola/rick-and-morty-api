import processCharacterData from './showCharacter.js';
import ElementUtils from './util/ElementUtils.js';

export default function showData(data, root) {

    if (data != null) {

        for (const character of data.results) {
            let charCard = processCharacterData(character);
            root.appendChild(charCard);
        }

    }else{

        root.appendChild(ElementUtils.createDiv().appendChild(ElementUtils.createH3("Not found")));
        
    }

}