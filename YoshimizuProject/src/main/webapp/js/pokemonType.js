var selectType;
var selectType2 = "";

$(function() {

    $('input[type=checkbox]').change(function() {
        let putType = $(this).attr('id');
        if($(this).prop('checked')){
            $('label[for="'+ putType + '"]').removeClass('btn-secondary').addClass('btn-success');
            if(selectType2){
                $('#' +selectType).prop('checked', false);
                $('label[for="'+ selectType + '"]').removeClass('btn-success').addClass('btn-secondary');
                selectType = selectType2;
                selectType2 = putType;
            } else if (selectType){
                selectType2 = putType;
            } else {
                selectType = putType;
            }
            typeEffectiveAjax();
        } else {
            $('label[for="'+ putType + '"]').removeClass('btn-success').addClass('btn-secondary');
            if(selectType == putType){
                selectType = selectType2;
                selectType2 = "";
                selectType ? "":$('#typeEffective').addClass('d-none');
            } else if(selectType2 == putType){
                selectType2 = "";
            }
            $(this).removeAttr('checked');
            selectType ? typeEffectiveAjax():"";
        }
        $(this).blur();
    });
    
    $('#clear').on('click',function(){
       $('input[type="checkbox"]').prop('checked', false); 
       $('label').removeClass('btn-success').addClass('btn-secondary');
       $('#typeEffective').addClass('d-none');
       selectType ="";
       selectType2 = "";
    });
    $('#search').on('click', function() {
        $.ajax({
            url: 'searchPokemonTypeEffective',
            dataType: 'json',
            type: 'POST',
            data: 'type=' + $('#type').val()+'&type2='+$('#type2').val() ? $('#type2').val():""
        }).done(function(result) {
            var cnt = 0;
            for (key in result[0]) {
                var a;
                if(result[1]){
                a = String(result[0][key] * result[1][key]);
                } else{
                a = String(result[0][key]);
                }
                $('#typeEffectiveTable tr td').eq(cnt).html(createEffectiveString(a));
                $('#typeEffectiveTable tr td').eq(cnt).css('background',createEffectiveColor(a));
                cnt++;
            }
        });
    });
    
    $('#attackSearch').on('click', function() {
        $.ajax({
            url: 'searchPokemonTypeEffective',
            dataType: 'json',
            type: 'POST',
            data: 'attackType=' + $('#attackType').val()+'&option=attackType',
        }).done(function(result) {
            var cnt = 0;
            for (key in result) {
                var attack = String(result[key]);
                $('#attackTypeTable tr td').eq(cnt).html(createEffectiveString(attack));
                $('#attackTypeTable tr td').eq(cnt).css('background',createEffectiveColor(attack));
                cnt++;
            }
        });
    });
    
});

function typeEffectiveAjax(){
    $.ajax({
            url: 'searchPokemonTypeEffective',
            dataType: 'json',
            type: 'POST',
            data: 'type=' + selectType+'&type2='+ selectType2 
        }).done(function(result) {
            var cnt = 0;
            for (key in result[0]) {
                var a;
                if(result[1]){
                a = String(result[0][key] * result[1][key]);
                } else{
                a = String(result[0][key]);
                }
                $('#typeEffectiveTable tr td').eq(cnt).html(createEffectiveString(a));
                $('#typeEffectiveTable tr td').eq(cnt).css('background',createEffectiveColor(a));
                cnt++;
            }
            $('#typeEffective').removeClass('d-none');
        });
}

function createEffectiveString(str) {
    var EffectiveMessage = "";
    switch (str) {
        case '0':
            EffectiveMessage = "効果がない";
            break;
        case '0.25':
            EffectiveMessage = "4分の1";
            break;
        case '0.5':
            EffectiveMessage = "効果がいまひとつ";
            break;
        case '1':
            EffectiveMessage = "等倍";
            break;
        case '2':
            EffectiveMessage = "効果がばつぐん!";
            break;
        case '4':
            EffectiveMessage = "4倍弱点";
            break;
        default:
            EffectiveMessage = "分かりません";
            break;
    }
    return EffectiveMessage;
}

function createEffectiveColor(str) {
    var EffectiveColor = "";
    switch (str) {
        case "0":
            EffectiveColor = "#928484";
            break;
        case '0.25':
            EffectiveColor = "#095169";
            break;
        case "0.5":
            EffectiveColor = "#79A1D4";
            break;
        case "1":
            EffectiveColor = "#FFEED5";
            break;
        case "2":
            EffectiveColor = "#FC9D9D";
            break;
        case "4":
            EffectiveColor = "#fc5956";
            break;
        default:
            EffectiveColor = "#000000";
            break;
    }
    return EffectiveColor;
}