const back = document.getElementById("back");
const totalX = back.clientWidth;
const totalY = back.clientHeight;

let places = [];
let cards = [];

places.push(new Place("q1", 50, 20));
places.push(new Place("q2", 50, 70));

cards.push(new Card("carta01", 10, 10, "rgb(100, 250, 100)"));
cards.push(new Card("carta02", 10, 60, "rgb(100, 100, 250)"));

places.forEach(idx => {
    targetPlace(idx);
});

fps();
function fps() {
    requestAnimationFrame(fps);
    
}

