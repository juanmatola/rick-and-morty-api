import showData from './showData.js';

export default class Search{

    constructor(root){
        this.root = root;
    }
    
    all(name) {

        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(data => {
                root.innerHTML='';
                showData(data, this.root);
            }
        );
        
    }

    byName(name) {

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