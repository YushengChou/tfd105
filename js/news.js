"use strict";

// 分類篩選
let btn_item = document.getElementsByClassName('btn_item');
let news_type = document.getElementsByClassName('news_type');
let news_item = document.getElementsByClassName('news_item');
for (let i = 0; i < btn_item.length; i++) {
    btn_item[i].addEventListener('click', function () {
        let click_choose = (btn_item[i].textContent).trim();
        for (let j = 0; j < news_type.length; j++) {
            // 選擇all
            if (btn_item[i] === btn_item[0]) {
                news_item[j].classList.remove('js-none');
                news_item[j].classList.add('js-block');
                // 判斷選擇哪個選項
            } else if (news_type[j].innerHTML === click_choose) {
                news_item[j].classList.remove('js-none');
                news_item[j].classList.add('js-block');
                // 沒被選的隱藏
            } else {
                news_item[j].classList.add('js-none');
            }
        }
    })
}