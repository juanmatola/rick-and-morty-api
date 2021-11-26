import showData from './showData.js';

export default class Search{

    spinner =   `<div class="w-100 text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>`;

    constructor(root){
        this.root = root;
    }

    byName(name) {

        this.root.innerHTML =  this.spinner;

        fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
            .then(res => {

                if (res.status == 200) {
                    return res.json();
                }else{
                    return null;
                }

            })
            .then(data => {
                root.innerHTML='';
                showData(data, this.root);
            }
        );
    
    }

}