function checkEmail($email) {
  var regEmail = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  var checker = $('#errorLog');

  if ( !$($email).val() ){
    checker.removeClass('hide').text('이메일 주소를 입력해주세요.');
  } else if ( !regEmail.test($($email).val()) ){
    checker.removeClass('hide').text('이메일 주소가 유효하지 않습니다.');
  } else {
    checker.addClass('hide');
  }
}
