"use strict";

$('#boxAmount, #boxRound, #boxMoney').on('blur', function() {
    $('#boxPack').val($('#boxAmount').val())
    $('#boxAmounts').val($('#boxAmount').val() * $('#boxRound').val())
    $('#boxCount').val($('#boxAmounts').val() * $('#boxMoney').val())
})

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
                <td>基本價${td6}元</td>
                <td>${td7}元</td>
                <td>${td8}本</td>
                <td>${td9}回</td>
                <td>${td10}本</td>
                <td>${td11}包</td>
                <td>${td12}元</td>
                <td>${td13}元</td>
            </tr>
        `)
        swal({
            title: "OK",
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
    }
})