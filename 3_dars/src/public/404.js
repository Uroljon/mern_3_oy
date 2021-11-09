document.body.addEventListener("mousemove", (e) => {
    document.querySelector(".torch").style.top = `${e.pageY}px`;
    document.querySelector(".torch").style.left = `${e.pageX}px`;
})