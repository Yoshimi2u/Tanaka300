<%@ taglib uri="jakarta.tags.core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width" , initial-scale=1.0">
<meta name="robots" content="noindex" />
<title>お問い合わせフォーム</title>
<script src="js/jquery-3.6.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<link href="css/bootstrap.min.css" rel="stylesheet">
<link href="mycss/Hompege.css" rel="stylesheet">
<script src="js/InquiryForm.js"></script>
</head>
<body>
	<c:import url="Header.jsp" />
	<div class="modal fade" id="checkModal" tabindex="-1"
		aria-labelledby="checkModalLabel" aria-hidden="true">
		<div
			class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">お問い合わせ内容確認</h5>
				</div>
				<div class="modal-body">
					<label class="fs-4">この内容でよろしいでしょうか？</label>
					<div class="row">
						<div class="col-3 text-end pe-0">名前：</div>
						<div class="col-9 ps-1" id="checkName"></div>
						<div class="col-3 text-end pe-0">要望機能名：</div>
						<div class="col-9 ps-1" id="checkRequestOptionName"></div>
						<div class="col-3 text-end pe-0">詳細：</div>
						<div class="col-9 ps-1" id="checkDetailForm"></div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-bs-dismiss="modal">キャンセル</button>
					<button type="button" class="btn btn-primary" id="requestRegistBtn">送信</button>
					<button type="button" id="chengeModalBtn" class="d-none"
						data-bs-toggle="modal" data-bs-dismiss="modal"
						data-bs-target="#SuccessModal"></button>
				</div>
			</div>
		</div>
	</div>
	<div class="modal fade" id="SuccessModal" data-bs-backdrop="static"
		data-bs-keyboard="false" aria-hidden="true"
		aria-labelledby="SuccessModalLabel" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">登録完了画面</h5>
				</div>
				<div class="modal-body">
					<label class="h4"> お問い合わせ内容の送信が完了しました。 <br>ご協力ありがとうございました。
					</label>
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary" id="Successbtn">ホーム画面に戻る</button>
				</div>
			</div>
		</div>
	</div>
	<div class="container-lg">
		<label class="h2">導入してほしい機能</label>
		<div class="w-75 mx-auto">
			<form id="requestContent">
				<div class="mb-2">
					<label class="form-label fs-4" for="name">名前(適当で可)</label> <input
						class="form-control" type="text" name="name" id="name" value="名無し">
				</div>
				<div class="mb-2">
					<label class="form-label fs-4" for="name">要望機能名</label> <input
						class="form-control" type="text" name="requestOptionName"
						id="requestOptionName">
				</div>
				<div class="mb-3">
					<label for="DetailForm" class="form-label fs-4">詳細(詳細なほどやると思います)</label>
					<textarea class="form-control" name="detailForm" id="detailForm"
						rows="5"></textarea>
			</form>
			<div class="text-end mt-1">
				<button type="button" class="btn btn-primary" data-bs-toggle="modal"
					data-bs-target="#checkModal" id="checkModalBtn">送信</button>
			</div>
		</div>
	</div>
</body>
</html>
