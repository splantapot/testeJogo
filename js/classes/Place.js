class Place {
    constructor(id = "id", x, y){
        this.id = id;
        this.x = x;
        this.y = y;

        this.cardId = null;

        let newPlace = document.createElement('div');
        newPlace.id = id;
        newPlace.classList.add("place");
        newPlace.style.left = `${x}%`;
        newPlace.style.top = `${y}%`;
        newPlace.style.transform = "translate(-50%,-50%)";
        document.body.appendChild(newPlace);

        targetPlace(newPlace);

        return newPlace;
    }
}