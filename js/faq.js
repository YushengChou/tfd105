"use strict";

// QA收合展開
let faq_item = document.getElementsByClassName('faq_item');
let btn_collapse = document.getElementsByClassName('btn-collapse');
for (let i = 0; i < faq_item.length; i++) {
    faq_item[i].addEventListener('click', function () {
        let faq_a = document.getElementById('FaqA-' + (i + 1));
        faq_a.classList.toggle('js-none');
        btn_collapse[i].classList.toggle('js-rotate');
    })
}