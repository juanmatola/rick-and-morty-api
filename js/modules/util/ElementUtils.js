export default class ElementUtils {

    static createImage(src) {
        let image = document.createElement('img');
        image.classList.add('img-fluid');
        image.src = src;
        return image;
    }
    
    static createH1(text) {
        let h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(text));
        return h1;
    }
    
    static createUl(itemsObject) {
        let ul = document.createElement('ul');
    
        for (const item of itemsObject) {
            let li = this.createLi(item);
            ul.appendChild(li);    
        }
    
        return ul;
    }

    static createLi(item) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        return li;
    }

    static createColumn() {
        let column = document.createElement('div');
        column.classList.add('col-md-3', 'col-sm-4', 'col-12', 'py-3');
        return column;
    }

    static createDiv(){
        return document.createElement('div');
    }

}