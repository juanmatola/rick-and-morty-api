export default class ElementUtils {

    static createImage(src) {
        let image = document.createElement('img');
        image.classList.add('img-fluid');
        image.src = src;
        return image;
    }
    
    static createH3(text) {
        let h3 = document.createElement('h3');
        h3.classList.add('my-2');
        h3.appendChild(document.createTextNode(text));
        return h3;
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