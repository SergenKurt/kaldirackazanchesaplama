

//sadece anasayfada çalıştır diğerlerinde fixed otomatik var.
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 67) {
        $(".headerAll").addClass('fixed');
    } else {
        $(".headerAll").removeClass("fixed");
    }
}); //missing );

$(".homeCalcFormSelectBot>ul>li>a").click(function () {
    var nameX = $(this).data("val");
    var nameY = $(this).data("result");
    $(this).closest('.homeCalcFormSelectBot').fadeOut('400');
    $(this).closest('ul').closest('.homeCalcFormSelectBot').prev('.homeCalcFormSelectTop').find('.homeCalcText').val(nameX);
    $(this).closest('ul').closest('.homeCalcFormSelectBot').prev('.homeCalcFormSelectTop').find('.homeCalcText').attr('data-result', nameY);
    hesap();


});

$(".homeCalcFormSelectTop").click(function () {
    $(this).next('.homeCalcFormSelectBot').fadeToggle(400);
});

function hesap() {

    try {
        var teminat = $('#teminat').val();
        if ($('#teminat').val() == '')
            teminat = 0;
        var kaldirac = $('#kaldirac').attr("data-result");
        var kur = $('#kur').val();
        var sonuc = parseInt(teminat) * parseInt(kaldirac) * kur;

        var newR = sonuc.toLocaleString('tr-TR', { style: 'currency', currency: 'USD' });
        $('#kazanc').val(newR.replace('$', ''));
    } catch (error) {
        $('#kazanc').val(0);
    }


}

$('#teminat').on('input', function () {
    hesap();
});

$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 0.32,
        min: 0,
        max: 1,
        step: 0.01,
        slide: function (event, ui) {
            $("#kur").val(ui.value);
            hesap();
        }
    });
    $("#kur").val($("#slider-range-min").slider("value"));
    hesap();
});

$(document).ready(function () {

    hesap();

    var scroll = $(window).scrollTop();
    if (scroll >= 67) {
        $(".headerAll").addClass('fixed');
    } else {
        $(".headerAll").removeClass("fixed");
    }


});


