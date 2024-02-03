const title = document.querySelector(".hello h1")

function handleTitleClick(){
    title.style.color = "blue";
};

function handleMouseEneter(){
    title.innerText = "Mouse is here~"
};

function handleMouseLeave(){
    title.innerText = "Mouse is gone!"
};

title.addEventListener("click", handleTitleClick); 
title.addEventListener("mouseenter", handleMouseEneter);
title.addEventListener("mouseleave", handleMouseLeave);