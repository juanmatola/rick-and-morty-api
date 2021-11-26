import showData from './modules/showData.js';

let root = document.getElementById('root');
    
fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8')
    .then(res => res.json())
    .then(data => showData(data, root));