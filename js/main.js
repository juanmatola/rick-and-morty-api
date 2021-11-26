import iterateData from './modules/iterateData.js';

let root = document.getElementById('root');
    
fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9')
    .then(res => res.json())
    .then( data => iterateData(root, data));