"use strict";

// 滑鼠閃爍
gsap.to('#mouse', 1, {
    scale: .5,
    backgroundColor: '#000',
    repeat: -1,
})

// 滑鼠位置
$(document).mousemove(function(e) {
    gsap.to('#mouse', 2, {
        x: e.pageX + 20,
        y: e.pageY + 20
    })
})

// 圓形移動座標
$('.box').mousemove(function(e) {
    gsap.to('#circle2', .5, {
        x: e.pageX / 5,
        y: e.pageY / 5
    })
    gsap.to('#circle3', .5, {
        x: -e.pageX / 5,
        y: e.pageY / 5
    })
    gsap.to('#circle4', .5, {
        x: e.pageX / 5,
        y: -e.pageY / 5
    })
    gsap.to('#circle5', .5, {
        x: -e.pageX / 5,
        y: -e.pageY / 5
    })
})

// 離開範圍
// $('.box').mouseleave(function(e) {
//     gsap.to('#circle2', 1, {
//         x: 0,
//         y: 0
//     })
//     gsap.to('#circle3', 1, {
//         x: 0,
//         y: 0
//     })
//     gsap.to('#circle4', 1, {
//         x: 0,
//         y: 0
//     })
//     gsap.to('#circle5', 1, {
//         x: 0,
//         y: 0
//     })
// })

// $('.box').mouseout(function() {
//     console.log('mouseout')
// })

// 水平線移動完成接顯示圓形
gsap.to('#h_line', 3, {
    width: '100%',
    onComplete: function() {
        gsap.to('.circle', 1, {
            opacity: 1
        })
    }
})

// 垂直線
gsap.to('#v_line', 3, {
    height: '100%',
})

// 箭頭
gsap.to('#arrow', 1, {
    y: 100,
    opacity: 0.2,
    repeat: -1
})

// 監聽scroll距離
$(document).on('scroll', function() {
    if(window.pageYOffset > 4200) {
        gsap.to('body', 1, {
            backgroundColor: '#999',
            color: 'green',
        })
    } else {
        gsap.to('body', 1, {
            backgroundColor: 'orange',
            color: '#000',
        })
    }
})

// 卡片繞圓
gsap.to('#imgRotate', 10, {
    rotation: 360,
    ease: 'none',
    repeat: -1,
})

$(document).mousedown(function() {
    console.log('down')
})

$(document).mouseup(function() {
    console.log('up')
})