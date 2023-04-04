const rouletteOrder = [7, 6, 5, 4, 3, 2, 1, 0, 9, 8];
const marginTop = [-164, -123, -82, -41, 0];
const stopTdNo = [6, 5, 4, 3, 2];
const topNo = 0;
const bottomNo = 9;
const nextNo = 8;
var changeItem;
var changeFromIndex;
var rouletteContent;
const speed = 200;
const stopSpeed = 1000;
$(function() {
  createSampleDate();
  createTable();
  console.log($('#roulettediv').height());
  console.log($('#roulette').height());

  $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()));
  $('#rouletteContent').change(function() {
    createTable();
  });
  $('#start').on('click', function() {
    $('#start').addClass('disabled');
    $('#stop').removeClass('disabled');
    $('#start').fadeOut(600);
    setTimeout(function() {
      $('#stop').fadeIn(600);
    }, 800);
    aiueo = setInterval(function() {
      //console.log("aiueo");
      // console.log(parseInt($('#roulette').css('margin-top'), 10));
      $('#roulette').animate({
        'marginTop': '0px'
      }, speed, 'linear', function() {
        changeContent();
        $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()) + 6);
      });
    }, speed);
  });
  $('#stop').on('click', function() {
    $('#stop').addClass('disabled');
    clearInterval(aiueo);
    // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
    // 2から5までのランダムな数字の生成
    var randomNum = Math.floor(Math.random() * (5));
    // console.log(randomNum);
    var suberi = marginTop[randomNum] + "px";
    //console.log(suberi);
    $('#roulette').animate({
      'marginTop': '0px'
    }, stopSpeed, 'linear', function() {
      changeContent();
      $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()) + 6);
    }).animate({
      'marginTop': '0px'
    }, stopSpeed * 2, 'linear', function() {
      changeContent();
      $('#roulette').css('margin-top', -($('#roulette').height() - $('#roulettediv').height()) + 6);
    });
    $('#roulette').animate({
      'marginTop': suberi
    }, stopSpeed * 2.5 * ((randomNum + 1) / 5), 'linear', function() {
      printRecipe(randomNum);
    });
  });
});

function changeContent() {
  for (i = bottomNo; i >= topNo; i--) {
    if (i < bottomNo / 2) {
      $('#roulette tbody tr').eq(Number(i)).children().html(rouletteContent[changeFromIndex]);
      addChangeFromIndex();
    } else {
      fromItem = $('#roulette tbody tr').eq(Number(i - 5)).children().html();
      $('#roulette tbody tr').eq(Number(i)).children().html(fromItem);
    }
  }
}

function addChangeFromIndex() {
  if (changeFromIndex == rouletteContent.length - 1) {
    changeFromIndex = 0;
  } else {
    changeFromIndex++;
  }
}

function printRecipe(randomNum) {
	let createdColor = createColor();
  $('#rouletteResult').css('background', createdColor);
  $('#rouletteResult').css('color', createComplementColor(createdColor));
  $('#rouletteResult').html($('#roulette tbody tr').eq(stopTdNo[randomNum]).children().html());
  $('#rouletteResult').fadeIn(300);
  $('#start').removeClass('disabled');
  $('#stop').hide();
  $('#start').show();;
}

function createSampleDate() {
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
  rouletteContent = $('#rouletteContent').val().split("\n");
  rouletteContent = rouletteContent.filter(Boolean);
  if (rouletteContent.length == 0) {
    alert("ルーレットの内容を記入してください。");
    return false;
  }
  while (rouletteContent.length <= 9) {
    rouletteContent.forEach(function(val) {
      rouletteContent.push(val);
    });
  }
  console.log("終わりました");
  for (i = 0; i < 10; i++) {
    if (i == 9) {
      $('#roulette tbody tr').eq(rouletteOrder[i]).children().html(rouletteContent[rouletteContent.length - 1]);
    } else if (i == 8) {
      $('#roulette tbody tr').eq(rouletteOrder[i]).children().html(rouletteContent[rouletteContent.length - 2]);
    } else {
      $('#roulette tbody tr').eq(rouletteOrder[i]).children().html(rouletteContent[i]);
    }
  }
  changeFromIndex = nextNo;
}

function createColor() {
  var color = Math.floor(Math.random() * 0xFFFFFF).toString(16);
  for (count = color.length; count < 6; count++) {
    color = "0" + color;
  }
  var randomColor = "#" + color;
	return randomColor;
}
function createComplementColor(fromColor) {
  var complementColor = "#";
  for (i = 1; i <= 6; i++) {
	let splitStr = fromColor.slice(-1);
	complementColor += splitStr;
	fromColor = fromColor.slice(0,-1);
  }
  return complementColor;
}
