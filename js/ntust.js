"use strict";

// 登入
$('#signIn').on('click', function() {
    if ($('#pwd').val() != '0000') {
        swal({
            title: "密碼錯誤",
            type: "error"
        })
    } else {
        swal({
            title: "登入成功",
            type: "success"
        }).then(function() {
            gsap.to('.mask', 1, {
                opacity: 0,
                scale: 0,
                onComplete: function() {
                    $('.mask').remove()
                }
            })
        })
    }
})

$('#boxAmount, #boxRound, #boxMoney, #boxBasic').on('blur', function() {
    // 包數 = 回數
    $('#boxPack').val($('#boxAmount').val())
    // 本數 = 本 * 回
    $('#boxAmounts').val($('#boxAmount').val() * $('#boxRound').val())
    // 小計 用基本價判斷
    if ($('#boxBasic').val() * $('#boxAmount').val() * $('#boxRound').val() < 1200) {
        $('#boxCount').val(1200)
    } else {
        $('#boxCount').val($('#boxBasic').val() * $('#boxAmount').val() * $('#boxRound').val())
    }
    // 包裝價錢 = 單價 * 包數
    $('#boxCount2').val($('#boxMoney').val() * $('#boxPack').val())
    // 合計
    $('#boxCounts').val(parseInt($('#boxCount').val()) + parseInt($('#boxCount2').val()))
})

let count = 0;
$('#ok').on('click', function() {
    if($('#boxCounts').val() == '') {
        swal({
            title: "尚未填完",
            type: "warning"
        });
    } else {
        let td1 = $('#boxDate').val()
        let td2 = $('#boxBook').val()
        let td3 = $('#boxOpen').val()
        let td4 = $('#boxDetail').val()
        let td5 = $('#boxBasic').val()
        let td6 = $('#boxAmount').val()
        let td7 = $('#boxRound').val()
        let td8 = $('#boxAmounts').val()
        let td9 = $('#boxCount').val()
        let td10 = $('#boxMoney').val()
        let td11 = $('#boxPack').val()
        let td12 = $('#boxCount2').val()
        let td13 = $('#boxCounts').val()
        count ++;
        $('#dataBody').append(`
            <tr>
                <td>${count}</td>
                <td>${td1}</td>
                <td>${td2}</td>
                <td>${td3}</td>
                <td>${td4}</td>
                <td>${td5}元</td>
                <td>${td6}本</td>
                <td>${td7}回</td>
                <td>${td8}本</td>
                <td>${td9}元</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td>包裝</td>
                <td>${td10}元</td>
                <td colspan="3">${td11}包</td>
                <td>${td12}元</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="9"></td>
                <td>${td13}元</td>
            </tr>
        `)
        swal({
            title: "成功新增",
            type: "success"
        });
        $('#boxDate').val('')
        $('#boxBook').val('')
        $('#boxOpen').val('')
        $('#boxSheet').val('')
        $('#boxDetail').val('')
        $('#boxBasic').val('')
        $('#boxMoney').val('')
        $('#boxAmount').val('')
        $('#boxRound').val('')
        $('#boxAmounts').val('')
        $('#boxPack').val('')
        $('#boxCount').val('')
        $('#boxCounts').val('')
        $('#boxCount2').val('')
    }
})