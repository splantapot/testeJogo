//Específica para pegar e mover cartas
const selected = {
    id: null,
    time: 0
};

function dragElement(elmnt = document.createElement("div")) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

        console.log('Nc: '+elmnt.id);

        if (!selected.id) {
            selected.id = elmnt.id;
            selected.time = new Date().getTime();
            elmnt.classList.add('select');
        }

        if (
            (selected.id && elmnt.id != selected.id && elmnt.classList.contains('card')) ||
            (selected.id && elmnt.id == selected.id && (new Date().getTime())-selected.time > 250)
            ) {
            document.getElementById(selected.id).classList.remove('select');
            selected.id = null;
            selected.time = new Date().getTime();
        }
    }
      
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

    }
      
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        

    }    
}

function targetPlace(elmnt = document.createElement("div")) {
    elmnt.onmousedown = dragMouseDown;
        
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
    
        if (selected.id && !elmnt.classList.contains('hasCard')) {
            let cardTp = document.getElementById(selected.id);
            cardTp.style.top = elmnt.style.top;
            cardTp.style.left = elmnt.style.left;

            //Diz que tem uma carta dentro do lugar
            elmnt.classList.add('hasCard');
            places.forEach((p) => {
                if (elmnt.id == p.id) {
                    p.cardId = selected.id;
                }
            });
            
            if (cardTp.classList.contains("select")) {
                cardTp.classList.remove("select");
                selected.id = null;
                selected.time = new Date().getTime();
            }
        }
    }
}