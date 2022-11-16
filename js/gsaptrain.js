"use strict";

gsap.to('#mouse', 1, {
    scale: .5,
    backgroundColor: '#000',
    repeat: -1,
})

gsap.to('#h_line', 5, {
    width: '100%',
    onComplete: function() {
        gsap.to('.circle', 1, {
            opacity: 1
        })
    }
})

gsap.to('#v_line', 5, {
    height: '100%',
})

$(document).mousemove(function(e) {
    $('#mouse').css('left', e.pageX + 'px')
    $('#mouse').css('top', e.pageY + 'px')
    gsap.to('#circle2', 1, {
        x: e.pageX / 5,
        y: e.pageY / 5
    })
    gsap.to('#circle3', 1, {
        x: -e.pageX / 5,
        y: e.pageY / 5
    })
    gsap.to('#circle4', 1, {
        x: e.pageX / 5,
        y: -e.pageY / 5
    })
    gsap.to('#circle5', 1, {
        x: -e.pageX / 5,
        y: -e.pageY / 5
    })
})
