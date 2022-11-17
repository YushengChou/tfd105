"use strict";

$('#boxAmount, #boxRound, #boxMoney').on('blur', function() {
    $('#boxPack').val($('#boxAmount').val())
    $('#boxAmounts').val($('#boxAmount').val() * $('#boxRound').val())
    $('#boxCount').val($('#boxAmounts').val() * $('#boxMoney').val())
})

$('#ok').on('click', function() {
    let td1 = $('#boxDate').val()
    let td2 = $('#boxBook').val()
    let td3 = $('#boxOpen').val()
    let td4 = $('#boxSheet').val()
    let td5 = $('#boxDetail').val()
    let td6 = $('#boxBasic').val()
    let td7 = $('#boxMoney').val()
    let td8 = $('#boxAmount').val()
    let td9 = $('#boxRound').val()
    let td10 = $('#boxAmounts').val()
    let td11 = $('#boxPack').val()
    let td12 = $('#boxCount').val()
    let td13 = $('#boxCounts').val()
    $('#dataBody').append(`
        <tr>
            <td>${td1}</td>
            <td>${td2}</td>
            <td>${td3}</td>
            <td>${td4}</td>
            <td>${td5}</td>
            <td>${td6}</td>
            <td>${td7}</td>
            <td>${td8}</td>
            <td>${td9}</td>
            <td>${td10}</td>
            <td>${td11}</td>
            <td>${td12}</td>
            <td>${td13}</td>
        </tr>
    `)
})