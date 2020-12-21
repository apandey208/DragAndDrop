const start = document.getElementsByClassName('empty_dnd');
const noFill = document.getElementsByClassName('dragFill');
const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}

//start listeners
start.addEventListner('dragstart', dragFirst);
start.addEventListner('dragend', dragEnd);

for (const empty of noFill) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('draglevel', dragLevel);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('dragdrop', dragDrop);
}


function dragFirst() {
    {
        this.className += 'hold';
        setTimeout(() => (this.className = 'invisible'), 0);
    }
}

function dragEnd() {
    this.className = 'noFill';
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += 'hovered';
}


function dragDrop(){
    this.className = 'empty';
    this.append(noFill);
}

const init = function(){
    for (let i = 0; i <noFill.length; i++ ){
    
    }
    cssScrollSanpPolyfill();
}
init();
