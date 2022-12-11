$(function() {
  $('#createbtn').on('click', function() {
    var rgb = getScore();
    navigator.clipboard.writeText(rgb);
    $('#createbtn').prop('disabled', true);
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
      }, 400);
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
      }, 400);
    }, 2300);

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
  $('#out_dat').children().remove();
  $("#out_dat").append('<span>' + score + "点です" + cnt + "回</span>");
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
