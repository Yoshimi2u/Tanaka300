var topNo = 0;
var bottomNo;
var changeItem;
var menuList = ['鶏むね肉のねぎしょうがだれ'
  , '鶏胸肉とセロリの焼きマリネ'
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
  , 'パスタ'
  , '湯豆腐'];
console.log(menuList.length);
var listSize = menuList.length - 1;
var constListSize = menuList.length - 1;
var speed = 400;
$(function() {
  createSumpleDate();
  createTable();
  $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()));
  $('#start').on('click', function() {
    $('#start').addClass('disabled');
    $('#stop').removeClass('disabled');
    $('#start').fadeOut(600);
    setTimeout(function() {
      $('#stop').fadeIn(600);
    }, 800);
    aiueo = setInterval(function() {
      console.log("aiueo");
      console.log(parseInt($('#roulette').css('margin-top'), 10));
      $('#roulette').animate({
        'marginTop': '0px'
      }, {
        duration: speed,
        easing: 'linear',
        complete: changeContent(),
        queue: false,
      });
    }, speed);
  });
  $('#stop').on('click', function() {
    clearInterval(aiueo);
    $('#stop').addClass('disabled');
    $('#roulette').animate({
      'marginTop': '0px'
    }, {
      duration: 2000,
      complete: printRecipe(),
    });
  });

  $('#confirm').on('click', function() {
    if (!confirm('押すなって言ったじゃないか！！')) {
      /*　キャンセルの時の処理 */
      return false;
    } else {
      /*　OKの時の処理  今回は特に処理がないので空*/
    }
  });
});
function roulette() {
  for (i = bottomNo; i >= topNo; i--) {
    if (i == 1) {
      $('#roulette tbody tr').eq(Number(i)).children().html(menuList[listSize]);
    } else {
      fromItem = $('#roulette tbody tr').eq(Number(i - 1)).children().html();
      $('#roulette tbody tr').eq(Number(i)).children().html(fromItem);
    }
  }
  subtractlistSize();
}

function subtractlistSize() {
  if (listSize == 0) {
    listSize = constListSize;
  } else {
    listSize--;
  }
}

function changeContent() {
  $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()));
  for (i = bottomNo; i >= topNo; i--) {
    if (i < bottomNo / 2) {
      $('#roulette tbody tr').eq(Number(i)).children().html(menuList[listSize]);
      subtractlistSize();
    } else {
      fromItem = $('#roulette tbody tr').eq(Number(i - 5)).children().html();
      $('#roulette tbody tr').eq(Number(i)).children().html(fromItem);
    }
  }
  console.log(speed);
}

function printRecipe() {
  setTimeout(function() {
    alert($('#roulette tbody tr').eq(2).children().html());
    $('#start').removeClass('disabled');
    $('#stop').hide();
    $('#start').show();
  }, 2000);
}
/*
function createTable() {
  bottomNo = $('#roulette tbody').children().length - 1;
  console.log(bottomNo + "bottomNo");
  var cnt = 0;
  for (i = bottomNo; i >= 0; i--) {
  $('#roulette tbody tr').eq(Number(i)).children().html(menuList[cnt]);
  console.log(i);
  cnt++;
  }
}*/

function createSumpleDate() {
  $('#rouletteContent').append("1\n");
  $('#rouletteContent').append("2\n");
  $('#rouletteContent').append("3\n");
  $('#rouletteContent').append("4\n");
  $('#rouletteContent').append("5\n");
  $('#rouletteContent').append("6\n");
  $('#rouletteContent').append("7\n");
  $('#rouletteContent').append("8\n");
  $('#rouletteContent').append("9\n");
  $('#rouletteContent').append("10\n\n\n\n\n");
}

function createTable() {
  rouletteContent = $('#rouletteContent').split("\n");
  for (i = 0; i < rouletteContent.length; i++) {
    console.log(rouletteContent[i]);
  }
}

