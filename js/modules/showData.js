import processCharacterData from './showCharacter.js';

export default function showData(data, root) {

    for (const character of data) {
        let charCard = processCharacterData(character);
        root.appendChild(charCard);
    }

}