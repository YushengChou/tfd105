"use strict";

// QA收合展開
let faq_item = document.getElementsByClassName('faq_item');
let btn_collapse = document.getElementsByClassName('btn-collapse');
for (let i = 0; i < faq_item.length; i++) {
    faq_item[i].addEventListener('click', function () {
        let faq_a = document.getElementById('FaqA-' + (i + 1));
        btn_collapse[i].classList.toggle('js-rotate');
        if(faq_a.style.maxHeight === ''){
            faq_a.style.maxHeight = faq_a.scrollHeight + 80 + 'px';
            faq_a.style.padding = 40 + 'px';
        } else {
            faq_a.style.maxHeight = '';
            faq_a.style.padding = 0;
        }
    })
}