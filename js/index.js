"use strict";

// 輪播牆
let slideList = document.getElementById('CaroList');
let prevSlide = document.getElementById('PrevSlide');
let nextSlide = document.getElementById('NextSlide');
let dotBtn = document.getElementsByClassName('dot_btn');
let dotItem = document.getElementsByClassName('dot_item');
let timer;
let index = 0;
let itemWidth = document.getElementsByClassName('carousel_item')[0].offsetWidth;

// 螢幕寬度改變
window.addEventListener('resize', function () {
    // 取得新的寬度
    itemWidth = document.getElementsByClassName('carousel_item')[0].offsetWidth;
    // 刷新
    dotItem[0].click();
});

function slide(d) {
    let newLeft = parseInt(slideList.style.left) + d;
    slideList.style.left = newLeft + 'px';
    if (newLeft > 0) {
        slideList.style.left = -(itemWidth * 3) + 'px';
    }
    if (newLeft === -(itemWidth * 4)) {
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
    slide(itemWidth);
})
// 右側按鈕
nextSlide.addEventListener('click', function () {
    index++;
    if (index === 4) {
        index = 0;
    }
    btnShow();
    slide(-(itemWidth));
})
// 每隔三秒執行
function play() {
    timer = setInterval(function () {
        nextSlide.click();
    }, 3000)
}
// 滑鼠滑入停止，移開繼續
function stop() {
    clearInterval(timer);
}
// dot輪到的加上顏色
function btnShow() {
    for (let i = 0; i < dotBtn.length; i++) {
        dotBtn[i].classList.remove('js-btnbgc');
    }
    dotBtn[index].classList.add('js-btnbgc');
}
// dot click切換至該圖
for (let i = 0; i < dotItem.length; i++) {
    dotItem[i].addEventListener('click', function () {
        index = i;
        btnShow();
        slideList.style.left = i * -(itemWidth) + 'px';
    })
}
// 初始化
slideList.style.left = 0 + 'px';
dotBtn[index].classList.add('js-btnbgc');
play();
slideList.onmouseover = stop;
slideList.onmouseout = play;