const back = document.getElementById("back");
const totalX = back.clientWidth;
const totalY = back.clientHeight;

let cardDragger = new DragCard();

let places = [];
let cards = [];

places.push(placement("q1", 50, 20));
places.push(placement("q2", 50, 70));

cards.push(cardment("carta01", 10, 10, "rgb(100, 250, 100)"));
cards.push(cardment("carta02", 10, 60, "rgb(100, 100, 250)"));

cards.forEach(idx => {
    cardDragger.dragElement(idx);
});

places.forEach(idx => {
    cardDragger.targetPlace(idx);
});

fps();
function fps() {
    requestAnimationFrame(fps);
}

