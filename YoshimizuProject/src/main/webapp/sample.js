$(function() {

  $('#createbtn').on('click', function() {
    var rgb = getScore();
    navigator.clipboard.writeText(rgb);
    $('#createbtn').prop('disabled', true);
    setTimeout(function() {
      $('#createbtn').prop('disabled', false);
      $('#success-msg').fadeOut(700).animate({
      'marginTop': '0px'
    }, {
      duration: 1000,
      queue:false
    });
    }, 2300);
    $('#success-msg').fadeIn(1000).animate({
      'marginTop': '480px'
    }, {
      duration: 500,
      queue: false
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
  });
});
