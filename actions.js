const slider = document.getElementById("slider");

const cards = document.querySelectorAll(".card");

const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

let index = 0;

function visibleCards(){

    if(window.innerWidth >= 1024) return 3;

    if(window.innerWidth >= 768) return 2;

    return 1;

}

function update(){

    const visible = visibleCards();

    const max = cards.length - visible;

    index = Math.max(0,Math.min(index,max));

    const cardWidth = cards[0].offsetWidth;

    slider.style.transform =
        `translateX(-${cardWidth * index}px)`;

    prev.disabled = index==0;

    next.disabled = index==max;

}

next.onclick = ()=>{

    index++;

    update();

}

prev.onclick = ()=>{

    index--;

    update();

}

window.onresize = update;

update();