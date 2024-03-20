class Card {
    constructor(id = "id", x, y, color) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;

        this.hp = 0;
        this.attack = 0;
        this.rangeMov = 0;
        this.dom = 0;

        let newPlace = document.createElement('div');
        newPlace.id = id;
        newPlace.classList.add("card");
        newPlace.style.left = `${x}%`;
        newPlace.style.top = `${y}%`;
        newPlace.style.transform = "translate(-50%,-50%)";
        newPlace.style.backgroundColor = color;
        document.body.appendChild(newPlace);

        dragElement(newPlace);

        return newPlace;
    }
}