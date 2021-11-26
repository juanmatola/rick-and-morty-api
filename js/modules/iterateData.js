import showCharacter from './showCharacter.js';

export default function iterateData(root, data) {

    for (const character of data) {
        showCharacter(root, character);
    }

}