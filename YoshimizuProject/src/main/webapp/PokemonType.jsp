<%@ taglib uri="jakarta.tags.core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width" , initial-scale=1.0">
<meta name="robots" content="noindex" />
<title>ポケモンタイプ相性</title>
<script src="js/jquery-3.6.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="mycss/Hompege.css" rel="stylesheet">
<script src="js/pokemonType.js"></script>
</head>
<body>
  <c:import url="Header.jsp" />
  <div class="container">
    <br> <span class="h2">ポケモンタイプ相性検索</span>
    <div class="row mx-auto mb-2">
      <input type="checkbox" class="btn-check" id="normal" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="normal">ノーマル</label>
      <input type="checkbox" class="btn-check" id="fire" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="fire">ほのお</label>
      <input type="checkbox" class="btn-check" id="water" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="water">みず</label>
      <input type="checkbox" class="btn-check" id="grass" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="grass">くさ</label>
    </div>
    <div class="row mx-auto mb-2">
      <input type="checkbox" class="btn-check" id="electric" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="electric">でんき</label>
      <input type="checkbox" class="btn-check" id="ice" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="ice">こおり</label>
      <input type="checkbox" class="btn-check" id="fighting" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="fighting">かくとう</label>
      <input type="checkbox" class="btn-check" id="poison" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="poison">どく</label>
    </div>
    <div class="row mx-auto mb-2">
      <input type="checkbox" class="btn-check" id="ground" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="ground">じめん</label>
      <input type="checkbox" class="btn-check" id="flying" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="flying">ひこう</label>
      <input type="checkbox" class="btn-check" id="psychic" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="psychic">エスパー</label>
      <input type="checkbox" class="btn-check" id="bug" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="bug">むし</label>
    </div>
    <div class="row mx-auto mb-2">
      <input type="checkbox" class="btn-check" id="rock" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="rock">いわ</label>
      <input type="checkbox" class="btn-check" id="ghost" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="ghost">ゴースト</label>
      <input type="checkbox" class="btn-check" id="dragon" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="dragon">ドラゴン</label>
      <input type="checkbox" class="btn-check" id="dark" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="dark">あく</label>
    </div>
    <div class="row mx-auto mb-2">
      <input type="checkbox" class="btn-check" id="steel" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="steel">はがね</label>
      <input type="checkbox" class="btn-check" id="fairy" autocomplete="off">
        <label class="btn btn-secondary col mx-2 p-1" for="fairy">フェアリー</label>
        <div class="col mx-2"><button type="button" class="btn btn-warning" id="clear">クリア</button></div>
    </div>
    <div class="row mx-auto d-none" id="typeEffective" style="max-width: 600px;">
      <table class="table table-sm table-bordered border-secondary"
        id="typeEffectiveTable">
        <tr>
          <th style="background: #aea886;">ノーマル</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #f45c19;">ほのお</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #4a96d6">みず</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #28b25c">くさ</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #eaa317">でんき</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #45a9c0">こおり</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #9a3d3e">かくとう</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #8f5b98">どく</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #916d3c">じめん</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #7e9ecf">ひこう</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #d56d8b">エスパー</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #989001">むし</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #878052">いわ</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #555fa4">ゴースト</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #454ba6">ドラゴン</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #7a0049">あく</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #9b9b9b">はがね</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #ffbbff">フェアリー</th>aa
          <td></td>
        </tr>
      </table>
    </div>
    <hr>
    <div class="d-none">
    <span class="h2">ポケモン攻撃技タイプ相性検索</span>
    <div class="row mx-auto w-50">
      <div class="col-4">
        <select name="attackType" id="attackType" class="form-select">
          <option value="regist_normal">ノーマル</option>
          <option value="regist_fire">ほのお</option>
          <option value="regist_water">みず</option>
          <option value="regist_grass">くさ</option>
          <option value="regist_electric">でんき</option>
          <option value="regist_ice">こおり</option>
          <option value="regist_fighting">かくとう</option>
          <option value="regist_poison">どく</option>
          <option value="regist_ground">じめん</option>
          <option value="regist_flying">ひこう</option>
          <option value="regist_psychic">エスパー</option>
          <option value="regist_bug">むし</option>
          <option value="regist_rock">いわ</option>
          <option value="regist_ghost">ゴースト</option>
          <option value="regist_dragon">ドラゴン</option>
          <option value="regist_dark">あく</option>
          <option value="regist_steel">はがね</option>
          <option value="regist_fairy">フェアリー</option>
        </select>
      </div>
      <div class="col-3 ms-2">
        <button class="btn btn-success" id="attackSearch">検索</button>
      </div>
    </div>
    <div class="row mx-auto" id="attackType" style="max-width: 600px;">
      <table class="table table-sm table-bordered border-secondary"
        id="attackTypeTable">
        <tr>
          <th style="background: #aea886;">ノーマル</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #f45c19;">ほのお</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #4a96d6">みず</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #28b25c">くさ</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #eaa317">でんき</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #45a9c0">こおり</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #9a3d3e">かくとう</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #8f5b98">どく</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #916d3c">じめん</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #7e9ecf">ひこう</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #d56d8b">エスパー</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #989001">むし</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #878052">いわ</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #555fa4">ゴースト</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #454ba6">ドラゴン</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #7a0049">あく</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #9b9b9b">はがね</th>
          <td>aa</td>
        </tr>
        <tr>
          <th style="background: #ffbbff">フェアリー</th>aa
          <td></td>
        </tr>
      </table>
    </div>
    </div>
  </div>
</body>
</html>
