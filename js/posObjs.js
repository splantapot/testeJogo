function getPos(txt = 'str', totalDimension) {
    let number = 0;
    txt.trim();
    if(txt.includes('px')) {
        number = parseInt(txt.split('p')[0]);
    } else {
        number = parseInt(txt.split('%')[0]);
        number *= totalDimension/100;
    }
    return Math.round(number);
}

function getCollision(rect1 = {x:0,y:0,w:0,h:0}, rect2 = {x:0,y:0,w:0,h:0}) {
    return (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y
    );
}