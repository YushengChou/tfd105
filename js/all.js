"use strict";

// loading
let Loading = document.getElementById('Loading');
let LoadText_span = document.querySelectorAll('#LoadText span');
LoadText_span.forEach(function (span, index) {
    // 設置span新的屬性 間隔0.1秒
    span.style.setProperty('--delay', `${index * .1}s`)
})
// 載入之後
window.addEventListener('load', function () {
    // 兩秒後將loading元素刪除
    this.setTimeout(function () {
        Loading.parentElement.removeChild(Loading);
    }, 1000)
})

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
    member_slide.classList.toggle('js-mbactive');
})
sign_in.addEventListener('click', function () {
    member_slide.classList.toggle('js-mbactive');
})

// 登入註冊展開關閉
let member_btn = document.getElementById('MemberBtn');
let member = document.getElementById('Member');
let btn_close = document.getElementById('BtnClose');
member_btn.addEventListener('click', function () {
    member.classList.remove('js-none');
    member.classList.add('js-block');
    document.body.style.overflow = 'hidden';
})
btn_close.addEventListener('click', function () {
    member.classList.add('js-none');
    document.body.style.overflow = '';
})
window.addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target === member) {
        member.classList.add('js-none');
        document.body.style.overflow = '';
    }
})

// 滑入
let slideBlocks = document.getElementsByClassName('js-slide');

function doScroll() {
    // Y軸視窗最底
    let dY = window.scrollY + window.innerHeight;
    for (let i = 0; i < slideBlocks.length; i++) {
        if (dY > slideBlocks[i].offsetTop) {
            slideBlocks[i].classList.add('js-active');
        } else {
            slideBlocks[i].classList.remove('js-active');
        }
    }
}
window.addEventListener('scroll', doScroll);

// 漢堡選單
let nav_btn = document.getElementById('NavBtn');
let nav_close = document.getElementById('NavClose');
let nav_body = document.getElementById('NavBody');
nav_btn.addEventListener('click', function () {
    nav_btn.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    nav_body.classList.add('js-active');
    document.body.style.overflow = 'hidden';
})
nav_close.addEventListener('click', function () {
    nav_btn.classList.toggle('js-none');
    nav_close.classList.toggle('js-none');
    nav_body.classList.remove('js-active');
    document.body.style.overflow = '';
})

// BackToTop
let BackTop = document.getElementById('BackTop');
BackTop.addEventListener('click', function () {
    // For Safari
    document.body.scrollTop = 0;
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0;
});


// 註冊存取資料
let user_id_el = document.getElementById('UserId');
let user_pw_el = document.getElementById('PassWord');
let su_ok = document.getElementById('SuOk');
su_ok.addEventListener('click', function (e) {
    let user_id = (user_id_el.value).trim();
    let user_pw = (user_pw_el.value).trim();
    // 取消預設事件
    e.preventDefault();
    if (user_id != "" && user_pw != "") {
        // 物件裝資料
        let acc = {
            "id": user_id,
            "pw": user_pw
        };
        // 轉為JSON格式/取出資料
        let account = JSON.parse(localStorage.getItem('account'));
        // 存入資料
        if (account) {
            let compare = true;
            for (let i = 0; i < account.length; i++) {
                if (acc.id === account[i].id) {
                    swal({
                        title: "已被註冊",
                        type: "error"
                    });
                    compare = false;
                }
            }
            if (compare) {
                account.push(acc);
                localStorage.setItem('account', JSON.stringify(account));
                swal({
                    title: "註冊成功",
                    type: "success"
                });
                user_id_el.value = '';
                user_pw_el.value = '';
                member_slide.classList.toggle('js-mbactive');
                // 關閉註冊框
                member.classList.add('js-none');
            }
        } else {
            account = [acc];
            localStorage.setItem('account', JSON.stringify(account));
            swal({
                title: "註冊成功",
                type: "success"
            });
            user_id_el.value = '';
            user_pw_el.value = '';
            member_slide.classList.toggle('js-mbactive');
            // 關閉註冊框
            member.classList.add('js-none');
        }
    } else {
        swal({
            title: "未輸入完整",
            type: "warning"
        });
    }
});

// 登入驗證
let LoginOk = document.getElementById('LoginOk');
let LoginId_el = document.getElementById('LoginId');
let Pw_el = document.getElementById('Pw');
let User = document.getElementById('User');
let UserIn = document.getElementById('UserIn');
LoginOk.addEventListener('click', function (e) {
    e.preventDefault();
    let user_id = LoginId_el.value.trim();
    let user_pw = Pw_el.value.trim();
    // 取出資料
    let account = JSON.parse(localStorage.getItem('account'));
    if (user_id !== '' && user_pw !== '') {
        if (account) {
            let compare_id = false;
            let compare_pw = '';
            // 比對帳號和密碼
            for (let i = 0; i < account.length; i++) {
                if (user_id === account[i].id && user_pw === account[i].pw) {
                    compare_id = true;
                    compare_pw = account[i].pw;
                }
            }
            if (compare_id) {
                swal({
                    title: "登入成功",
                    type: "success"
                });
                LoginId_el.value = '';
                Pw_el.value = '';
                User.classList.add('js-none');
                UserIn.classList.remove('js-none');
                member.classList.add('js-none');
            } else {
                if (user_pw !== compare_pw) {
                    swal({
                        title: "密碼錯誤",
                        type: "error"
                    });
                }
            }
        } else {
            swal({
                title: "尚未註冊",
                type: "warning"
            });
        }
    } else {
        if (user_id === "" && user_pw === "") {
            swal({
                title: "帳號密碼未輸入",
                type: "warning"
            });
        } else if (user_id === "") {
            swal({
                title: "帳號未輸入",
                type: "warning"
            });
        } else {
            swal({
                title: "密碼未輸入",
                type: "warning"
            });
        }
    }
})