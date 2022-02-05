"use strict";

// 種類篩選
let btn_item = document.getElementsByClassName('btn_item');
let product_item = document.getElementsByClassName('product_item');
for (let i = 0; i < btn_item.length; i++) {
    btn_item[i].addEventListener('click', function () {
        for (let j = 0; j < product_item.length; j++) {
            if (btn_item[i] === btn_item[0] && product_item[j].classList.contains('beef')) {
                product_item[j].classList.remove('js-none')
                product_item[j].classList.add('js-block')
            } else if (btn_item[i] === btn_item[1] && product_item[j].classList.contains('pork')) {
                product_item[j].classList.remove('js-none')
                product_item[j].classList.add('js-block')
            } else if (btn_item[i] === btn_item[2] && product_item[j].classList.contains('chicken')) {
                product_item[j].classList.remove('js-none')
                product_item[j].classList.add('js-block')
            } else if (btn_item[i] === btn_item[3] && product_item[j].classList.contains('vegetable')) {
                product_item[j].classList.remove('js-none')
                product_item[j].classList.add('js-block')
            } else {
                product_item[j].classList.add('js-none')
            }
        }
    })
}