<%@ taglib uri="jakarta.tags.core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width" , initial-scale=1.0">
<meta name="robots" content="noindex" />
<title>ルーレットページ</title>
<script src="js/jquery-3.6.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="mycss/Hompege.css" rel="stylesheet">
<script src="js/roulette.js"></script>
</head>
<body>
  <c:import url="Header.jsp" />
  <audio src="image/カーソル移動1.mp3" id="audio"></audio>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="mx-auto mb-2" style="max-width:600px; height:50px;">
        	<div class="alert text-center fs-4 py-1" id="rouletteResult" style="display:none;">
        		
        	</div>
        </div>
        <div class="overflow-hidden border bg-light mx-auto border rounded border-success border-4"
          style="height: 206px; max-width: 500px;" id="roulettediv">
          <table class="table user-select-none" id="roulette">
            <tbody class="table-striped">
              <tr>
                <td style="height: 41px;"></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br>
    <div class="text-center" style="height: 40px;">
      <button class="btn btn-primary" id="start">スタート</button>
      <button class="btn btn-danger" id="stop" style="display: none;">ストップ</button>
    </div>
    <br>
    <div class="row">
      <div class="mx-auto" style="max-width: 500px;"
        id="createRouletteContent">
        <textarea class="form-control" rows="10" style="font-size: 15px;"
          id="rouletteContent"></textarea>
      </div>
      <br> <br>
    </div>
</body>
</html>
