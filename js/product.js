"use strict";

// 放大鏡效果
let zoom = document.getElementById('Zoom');
let zoom_width = zoom.clientWidth;
let zoom_height = zoom.clientHeight;
zoom.addEventListener('mouseenter', enterHandler);
zoom.addEventListener('mousemove', moveHandler);
zoom.addEventListener('mouseleave', leaveHandler);
zoom.style.backgroundSize = `${zoom_width}px ${zoom_height}px`;

window.addEventListener('resize', function () {
    let x = zoom.clientWidth;
    let y = zoom.clientHeight;
    zoom.style.backgroundSize = `${x}px ${y}px`;
});

function enterHandler() {
    zoom.classList.add('js-zoom');
}

function moveHandler(e) {
    // 座標/寬度*100%
    window.addEventListener('resize', function () {
        if (window.innerWidth < 540) {
            zoom_width = zoom.clientWidth;
            zoom_height = zoom.clientHeight;
        } else {
            zoom_width = zoom.clientWidth;
            zoom_height = zoom.clientHeight;
        }
    })
    let x = (e.offsetX / zoom.offsetWidth * 100) + "%";
    let y = (e.offsetY / zoom.offsetHeight * 100) + "%";
    zoom.style = `background-position: ${x} ${y}`;
    zoom.style.backgroundSize = `${(zoom_width) * 2}px ${(zoom_height) * 2}px`;
}

function leaveHandler() {
    zoom.classList.remove('js-zoom');
    zoom.style = "background-position:";
    let x = zoom.clientWidth;
    let y = zoom.clientHeight;
    if (window.innerWidth > 540) {
        zoom.style.backgroundSize = `${zoom_width}px ${zoom_height}px`;
    } else {
        zoom.style.backgroundSize = `${x}px ${y}px`;
    }
}