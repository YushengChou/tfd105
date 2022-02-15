"use strict";

// 輪播牆
let slideList = document.getElementById('CaroList');
let prevSlide = document.getElementById('PrevSlide');
let nextSlide = document.getElementById('NextSlide');
let dotBtn = document.getElementsByClassName('dot_btn');
let num;
let index = 0;
// 初始化
dotBtn[index].classList.add('js-btnbgc');

function slide(d) {
    let newLeft = parseInt(slideList.style.left) + d;
    slideList.style.left = newLeft + 'px';
    if (newLeft > 0) {
        slideList.style.left = -3600 + 'px';
    }
    if (newLeft === -4800) {
        slideList.style.left = 0 + 'px';
    }
}
// 左側按鈕
prevSlide.addEventListener('click', function () {
    index--;
    if (index === -1) {
        index = 3;
    }
    btnShow();
    slide(1200);
})
// 右側按鈕
nextSlide.addEventListener('click', function () {
    index++;
    if (index === 4) {
        index = 0;
    }
    btnShow();
    slide(-1200);
})
// 每隔三秒執行
function play() {
    num = setInterval(function () {
        nextSlide.click();
    }, 3000)
}
play();
// 滑鼠滑入停止，移開繼續
function stop() {
    clearInterval(num);
}
slideList.onmouseover = stop;
slideList.onmouseout = play;
// dot輪到的加上顏色
function btnShow() {
    for (let i = 0; i < dotBtn.length; i++) {
        dotBtn[i].classList.remove('js-btnbgc');
    }
    dotBtn[index].classList.add('js-btnbgc');
}
// dot click切換至該圖
for (let i = 0; i < dotBtn.length; i++) {
    dotBtn[i].addEventListener('click', function () {
        index = i;
        btnShow();
        slideList.style.left = i * -1200 + 'px';
    })
}