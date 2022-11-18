"use strict";

// 登入
// $('#signIn').on('click', function() {
//     if ($('#pwd').val() != '0000') {
//         swal({
//             title: "密碼錯誤",
//             type: "error"
//         })
//     } else {
//         swal({
//             title: "登入成功",
//             type: "success"
//         }).then(function() {
//             gsap.to('.mask', 1, {
//                 opacity: 0,
//                 scale: 0,
//                 onComplete: function() {
//                     $('.mask').remove()
//                 }
//             })
//         })
//     }
// })

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
                <td class='td0'>${count}</td>
                <td class='td1'>${td1}</td>
                <td class='td2'>${td2}</td>
                <td class='td3'>${td3}</td>
                <td class='td4'>${td4}</td>
                <td class='td5'>${td5}元</td>
                <td class='td6'>${td6}本</td>
                <td class='td7'>${td7}回</td>
                <td class='td8'>${td8}本</td>
                <td class='td9'>${td9}元</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="4"></td>
                <td>包裝</td>
                <td class='td10'>${td10}元</td>
                <td class='td11' colspan="3">${td11}包</td>
                <td class='td12'>${td12}元</td>
                <td></td>
            </tr>
            <tr>
                <td colspan="10"></td>
                <td class='td13'>${td13}元</td>
            </tr>
        `)
        swal({
            title: "成功新增",
            type: "success"
        }).then(function() {
            $('#ok').prop('disabled', true)
        })
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

$('#send').on('click', function() {
    let index = $('#dataBody').find('td.td0').text()
    let date = $('#dataBody').find('td.td1').text()
    let bookNum = $('#dataBody').find('td.td2').text()
    let openNum = $('#dataBody').find('td.td3').text()
    let detail = $('#dataBody').find('td.td4').text()
    let uPrice = $('#dataBody').find('td.td5').text()
    let ben = $('#dataBody').find('td.td6').text()
    let hui = $('#dataBody').find('td.td7').text()
    let bens = $('#dataBody').find('td.td8').text()
    let money = $('#dataBody').find('td.td9').text()
    let pack = $('#dataBody').find('td.td10').text()
    let packPrice = $('#dataBody').find('td.td11').text()
    let packAmount = $('#dataBody').find('td.td12').text()
    let totalPrice = $('#dataBody').find('td.td13').text()
    let dataVal = {
        'index': index,
        'date': date,
        'bookNum': bookNum,
        'openNum': openNum,
        'detail': detail,
        'uPrice': uPrice,
        'ben': ben,
        'hui': hui,
        'bens': bens,
        'money': money,
        'pack': pack,
        'packPrice': packPrice,
        'packAmount': packAmount,
        'totalPrice': totalPrice,
    }
    $.ajax({
        type: 'get',
        url: 'https://script.google.com/macros/s/AKfycbwQjdjXceOTYf0tP4IkmGNQBCfQvKyQR9nP0dd5KihVwrZEwOXadIZxmwoWQMpEda3aHw/exec',
        data: dataVal,
        dataTyoe: 'JSON',
        success: function(res) {
            console.log(res)
            swal({
                title: "成功新增",
                type: "success"
            }).then(function() {
                $('#dataBody').empty()
                $('#ok').prop('disabled', false)
            })
        },
        error: function(res) {
            console.log(res)
        }
    })
})
