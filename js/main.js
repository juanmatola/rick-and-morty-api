import Search from './modules/Search.js';

let searchInput = document.getElementById('search');
let root = document.getElementById('root');

Search.all();

searchInput.addEventListener('input', (e) => {
    Search.byName(e.target.value);
});
