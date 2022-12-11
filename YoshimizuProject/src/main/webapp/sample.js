var menuList = ['鶏むね肉のねぎしょうがだれ'
  , '鳥胸肉とセロリの焼きマリネ'
  , '鶏むねマヨクリームソース'
  , '鶏肉のねぎま煮'
  , '鶏肉のチリレモンバター'
  , '豚と椎茸のゆずみそ炒め'
  , '豚肉の梅焼き'
  , '豚肉と青梗菜の中華炒め'
  , '豚肉の土佐煮'
  , 'ゆで豚のみょうがあえ'
  , '牛肉とゴーヤのラー油炒め'
  , '牛しそポン酢'
  , 'つなぎなしハンバーグ'
  , 'ドライカレー'
  , 'ガパオ風炒め'
  , '鮭のオリーブマスタードマリネ'
  , 'ぶりのごま焼き'
  , 'ぶりのしそみそ焼き'
  , 'えびのガーリック炒め'
  , 'たらのセロリからし蒸し'
  , '厚揚げのピリ辛煮'
  , '厚揚げにらポン酢'
  , '厚揚げのツナマヨ煮'
  , 'もやしの梅サラダ'
  , 'もやしとにらのナムル'
  , 'もやしとパプリカのごま酢あえ'
  , 'ズッキーニのガーリックソテー'
  , 'ズッキーニとなすのチーズグリル'
  , 'ズッキーニの薬味あえ'
  , '小松菜とトマトのニンニク炒め'
  , '小松菜と桜えびのナムル'
  , '小松菜のレンチン卵とじ'
  , 'ブロッコリーのアボカド炒め'
  , 'ブロッコリーのジンジャーサラダ'
  , 'ブロッコリーとかぶのマスタードあえ'
  , 'おくらおかかチーズ'
  , 'オクラの梅のりあえ'
  , 'オクラのわさびマリネ'
  , 'アスパラカレーバター'
  , 'アスパラの塩檸檬炒め'
  , 'アスパラのからしじょうゆあえ'
  , 'エリンギのうま煮'
  , 'マッシュルームのエスカルゴ風'
  , 'しいたけのゴマ塩あえ'
  , 'まいたけのきんぴら'
  , '親子丼'
  , 'カレー'
  , 'パスタ'];
$(function() {
  $('#createbtn').on('click', function() {
    var score = getScore().split(',');
    navigator.clipboard.writeText(score[0]);
    $('#showScore').html(score[1] + '点、試行回数' + score[2] + '回');
    $('#createbtn').prop('disabled', true);
    $()
    $('#success-msg').fadeIn(1000).animate({
      'marginTop': '10px'
    }, {
      duration: 500,
      queue: false
    });
    setTimeout(function() {
      $('#success-msg').fadeOut(700).animate({
        'marginTop': '-45px'
      }, {
        duration: 1000,
        queue: false
      });
      setTimeout(function() {
        $('#createbtn').prop('disabled', false);
      }, 600);
    }, 2300);
  });

  $('#goingWorkbtn,#leftWorkbtn').on('click', function() {
    var a = $(this).prop('name');
    var Date = (a === 'start') ? createGoingWorkDate() : createLeftWorkDate();
    navigator.clipboard.writeText(Date);
    $('#show').html(Date);
    console.log($('#show').val());
    // $('#out_dat').children().remove();
    $("#out_dat").append('<span>' + Date + "</span><br>");
    $('.btn-group').children().prop('disabled', true);
    $('#createMsg').fadeIn(1000).animate({
      'marginTop': '10px'
    }, {
      duration: 500,
      queue: false
    });
    setTimeout(function() {
      $('#createMsg').fadeOut(700).animate({
        'marginTop': '-45px'
      }, {
        duration: 1000,
        queue: false
      });
      setTimeout(function() {
        $('.btn-group').children().prop('disabled', false);
      }, 600);
    }, 2300);

  });
  $('#roulette').on('click', function() {
    if ($('#roulette').hasClass('btn-success')) {
      $('#roulette').removeClass('btn-success');
      $('#roulette').addClass('btn-danger');
      $('#roulette span').html('ストップ');
      recipe = setInterval(function(){
		rundomRecipe();
	},20);
    }
    else if ($('#roulette').hasClass('btn-danger')) {
	  $('#roulette').removeClass('btn-danger');
      $('#roulette').addClass('btn-success');
      $('#roulette span').html('スタート');
      clearInterval(recipe);
    }
  });
});
function getScore() {
  var score = 0;
  var str = "";
  var rand = 0;
  var cnt = 0;
  while (true) {
    if (Number(score < 70) || Number(score > 75)) {
      score = 0;
      str = "";
      for (i = 0; i < 20; i++) {
        rand = Math.floor(Math.random() * 2) + 3
        str = str + rand + '\r\n';
        score = Number(score) + Number(rand);
      }
      cnt++;
    } else {
      break;
    }
  }
  var str = str + ',' + score + ',' + cnt;
  $('#createbtn').blur();
  return str;
}

function createGoingWorkDate() {
  var date = new Date();
  var year = date.getYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = $('input').prop('checked') ? date.getMinutes() + 1 : date.getMinutes();
  if (minute < 10) { minute = "0" + minute };
  if (year < 2000) { year += 1900 };

  var dateStr = year + "年" + month + "月" + day + "日" + hour + ":" + minute + "作業開始します。体調問題ありません。";
  return dateStr;
}

function createLeftWorkDate() {
  var date = new Date();
  var year = date.getYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = $('input').prop('checked') ? date.getMinutes() + 1 : date.getMinutes();
  if (minute < 10) { minute = "0" + minute };
  if (year < 2000) { year += 1900 };

  var dateStr = year + "年" + month + "月" + day + "日" + hour + ":" + minute + "作業終了します。";
  return dateStr;
}

var rundomRecipe = function(){
	var cnt = menuList.length +1;
	var rand = Math.floor(Math.random() * cnt);
	$('#recipe').html(menuList[rand]);
}
