function ChangeImg(elem){
    document.getElementById("main-img").src = elem.firstElementChild.src;
    document.getElementById("main-img-link").href = elem.href;
}