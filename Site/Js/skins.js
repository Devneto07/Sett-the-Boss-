function toggleFullscreen(imgSrc) {
    let fullscreenDiv = document.querySelector('.fullscreen');

    if (fullscreenDiv.classList.contains('active')) {
        fullscreenDiv.classList.remove('active');
    } else {
        let fullscreenImg = document.querySelector('.fullscreen img');
        fullscreenImg.src = imgSrc;
        fullscreenDiv.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let skins = document.querySelectorAll(".skin img");

    let fullscreenDiv = document.createElement("div");
    fullscreenDiv.classList.add("fullscreen");
    document.body.appendChild(fullscreenDiv);

    let fullscreenImg = document.createElement("img");
    fullscreenDiv.appendChild(fullscreenImg);

    skins.forEach((img) => {
        img.addEventListener("click", function () {
            toggleFullscreen(this.src);
        });
    });

    fullscreenDiv.addEventListener("click", function () {
        toggleFullscreen("");
    });
});
