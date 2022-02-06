"use strict";

// 側邊欄(顯示隱藏)+導覽列(背景半透明)
let aside_bar = document.getElementById('AsideBar');
let nav = document.getElementById('Nav');

function showAsideBar() {
    let dY = window.pageYOffset;
    // 瀏覽器垂直距離
    if (dY > 300) {
        aside_bar.classList.add('js-show');
        nav.classList.add('js-bgc');
    } else {
        aside_bar.classList.remove('js-show');
        nav.classList.remove('js-bgc');
    }
}
window.addEventListener('scroll', showAsideBar);

// 收藏
let count = 0;
let collect_count = document.getElementById('NavCount');
let more_item = document.getElementsByClassName('more_item');
for (let i = 0; i < more_item.length; i++) {
    more_item[i].addEventListener('click', function () {
        if (this.classList.contains('more_item--active')) {
            // 判斷是否有class
            this.classList.remove('more_item--active');
            count -= 1;
            // 若有class移除並-1
            collect_count.innerHTML = '';
            collect_count.innerHTML = count;
            // 清空收藏數字
            if (count === 0) {
                collect_count.innerHTML = '';
            }
        } else {
            this.classList.add('more_item--active');
            count++;
            // 若無class加上並+1
            collect_count.innerHTML = '';
            collect_count.innerHTML = count;
        }
    })
}

// 登入註冊切換
let sign_up = document.getElementById('SignUp');
let sign_in = document.getElementById('SignIn');
let member_slide = document.getElementsByClassName('member_slide')[0];
sign_up.addEventListener('click', function () {
    member_slide.classList.toggle('js-mbactive')
})
sign_in.addEventListener('click', function () {
    member_slide.classList.toggle('js-mbactive')
})

// 登入註冊展開關閉
let member_btn = document.getElementById('MemberBtn');
let member = document.getElementById('Member');
let btn_close = document.getElementById('BtnClose');
member_btn.addEventListener('click', function () {
    member.classList.remove('js-none');
    member.classList.add('js-block');
})
btn_close.addEventListener('click', function () {
    member.classList.add('js-none');
})


// 滑入
let slideBlocks = document.getElementsByClassName('js-slide');

function doScroll() {
    // Y軸高度
    let dY = window.pageYOffset;
    for (let i = 0; i < slideBlocks.length; i++) {
        if (dY > slideBlocks[i].offsetTop / 2) {
            slideBlocks[i].classList.add('js-active')
        } else {
            slideBlocks[i].classList.remove('js-active')
        }
    }
}
window.addEventListener('scroll', doScroll);