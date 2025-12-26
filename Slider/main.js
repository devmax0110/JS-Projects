const next = document.getElementById("next");
const prev = document.getElementById("prev");
const offers = document.querySelector(".offers-meal");

let index = 0 ; 
function slide(to){
    const total = offers.children.length;
    index = (index + to + total)% total
    offers.style.transform = `translateX(-${index * 100}%)`;
}

next.onclick = ()=>slide(1);
prev.onclick = ()=>slide(-1);
