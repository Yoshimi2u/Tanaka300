$(function() {
	  $('#goingWorkbtn').on('click', function() {
    var Date = createGoingWorkDate();
    navigator.clipboard.writeText(Date);
   // $('#out_dat').children().remove();
    $("#out_dat").append('<span>' + Date + "</span><br>");

  });
  
    $('#leftWorkbtn').on('click', function() {
    var Date = createLeftWorkDate();
    navigator.clipboard.writeText(Date);
   // $('#out_dat').children().remove();
    $("#out_dat").append('<span>' + Date + "</span><br>");
  });
});

function createGoingWorkDate() {
  var date = new Date();
  var year = date.getYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = $('input').prop('checked')? date.getMinutes() +1 : date.getMinutes();
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
  var minute = $('input').prop('checked')? date.getMinutes() +1 : date.getMinutes();
  if (year < 2000) { year += 1900 };

  var dateStr = year + "年" + month + "月" + day + "日" + hour + ":" + minute + "作業終了します。";
  return dateStr;
}