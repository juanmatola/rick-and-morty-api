import showData from './modules/showData.js';

let root = document.getElementById('root');
    
fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => showData(data.results, root));