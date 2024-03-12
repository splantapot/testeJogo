//Específica para pegar e mover cartas
class DragCard extends Drag {
    constructor() {
        super();
        this.selected = {
            id: null,
            time: 0
        }
    }

    dragElement(elmnt = document.createElement("div")) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let selected = this.selected;
        elmnt.onmousedown = dragMouseDown;
    
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
            
            if (elmnt.classList.contains("card") && !selected.id)  {
                selected.id = elmnt.id;
                selected.time = new Date().getTime();
                elmnt.classList.add("select");
                //console.log(selected.id)
            }
        
            if (selected.id && !(document.getElementById(selected.id)==elmnt) && elmnt.classList.contains("card")) {
                let selectedCard = document.getElementById(selected.id)
                if (selectedCard.classList.contains("select")) {
                    selectedCard.classList.remove("select");
                    selected.id = null;
                    selected.time = 0;
                }
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
            
            console.log("arrastando: "+elmnt.id);
        }
      
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;

            const posElemnt = {
                id:elmnt.id,
                x:getPos(elmnt.style.left, totalX),
                y:getPos(elmnt.style.top, totalY),
                w:elmnt.clientWidth,
                h:elmnt.clientHeight
            };

            let placesCollided = [], maior = 0;
            places.forEach(idx => {
                let plc = {
                    id:idx.id,
                    x:getPos(idx.style.left, totalX),
                    y:getPos(idx.style.top, totalY),
                    w:idx.clientWidth,
                    h:idx.clientHeight
                }

                if (getCollision(posElemnt, plc)) {
                    console.log(posElemnt.id + ' collision with ' + plc.id);
                    let lx = 
                        Math.abs(plc.x+plc.w-posElemnt.x)>Math.abs(posElemnt.x+posElemnt.w-plc.x)?
                        Math.abs(posElemnt.x+posElemnt.w-plc.x):
                        Math.abs(plc.x+plc.w-posElemnt.x);
                    let ly = 
                        Math.abs(plc.y+plc.h-posElemnt.y)>Math.abs(posElemnt.y+posElemnt.h-plc.y)?
                        Math.abs(posElemnt.y+posElemnt.h-plc.y):
                        Math.abs(plc.y+plc.h-posElemnt.y);
                    placesCollided.push({
                        id: plc.id,
                        area: lx*ly
                    });
                }
            });

            console.log(placesCollided)
            if (placesCollided.length) {
                maior = placesCollided[0];
                for (const p of placesCollided) {
                    maior = maior.area < p.area? p : maior;
                }

                if (maior.area > 500) {
                    let placeTp = document.getElementById(maior.id);
                    elmnt.style.top = placeTp.style.top;
                    elmnt.style.left = placeTp.style.left;
                }
                if (elmnt.classList.contains("select")) {
                    elmnt.classList.remove("select");
                    selected.id = null;
                    selected.time = 0;
                }
            }

            if (elmnt.classList.contains("select") && (((new Date().getTime()))-selected.time)>200) {
                elmnt.classList.remove("select");
                selected.id = null;
            }
        }    
    }

    targetPlace(elmnt = document.createElement("div")) {
        let selected = this.selected;
        elmnt.onmousedown = dragMouseDown;
        
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
    
            if (selected.id) {
                let cardTp = document.getElementById(selected.id);
                cardTp.style.top = elmnt.style.top;
                cardTp.style.left = elmnt.style.left;
    
                if (cardTp.classList.contains("select")) {
                    cardTp.classList.remove("select");
                    selected.id = null;
                    selected.time = 0;
                }
            }
        }
    }
}