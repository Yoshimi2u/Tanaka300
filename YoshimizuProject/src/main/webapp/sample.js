$(function(){
	$('.text').append("jqueryが読み込まれています");

    $('#createbtn').on('click', function() {
        var rgb = getScore();
        navigator.clipboard.writeText(rgb);
        $('#success-msg').fadeIn("slow", function () {
            $(this).delay(2000).fadeOut("slow");
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
            
            $("#out_dat").append(score + "点です");
            $("#out_dat").append(cnt + "回<br>");
            return str;
        }
    });
});