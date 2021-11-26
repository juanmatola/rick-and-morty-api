import Search from './modules/Search.js';

let searchInput = document.getElementById('search');
let root = document.getElementById('root');

let search = new Search(root);

search.byName('');

searchInput.addEventListener('input', (e) => {
    search.byName(e.target.value);
});
