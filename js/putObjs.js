function placement(id = "id", x, y) {
    let newPlace = document.createElement('div');
    newPlace.id = id;
    newPlace.classList.add("place");
    newPlace.style.left = `${x}%`;
    newPlace.style.top = `${y}%`;
    newPlace.style.transform = "translate(-50%,-50%)";
    document.body.appendChild(newPlace);
    return newPlace;
}

function cardment(id = "id", x, y, color) {
    let newPlace = document.createElement('div');
    newPlace.id = id;
    newPlace.classList.add("card");
    newPlace.style.left = `${x}%`;
    newPlace.style.top = `${y}%`;
    newPlace.style.transform = "translate(-50%,-50%)";
    newPlace.style.backgroundColor = color;
    document.body.appendChild(newPlace);
    return newPlace;
}