// 구매계약서 자택-이메일 선택
var homeValid = true;
$("label:contains('자택')").click(function(){
    $('#reportToHome').removeClass('hide');
    $('#reportToEmail').addClass('hide');
    homeValid = true;
    checkTermValid();
});
$("label:contains('이메일')").click(function(){
    $('#reportToHome').addClass('hide');
    $('#reportToEmail').removeClass('hide');
    homeValid = false;
    checkTermValid();
});

//구매계약서 이메일 체크
var emailValid = false
$('#reportToEmail input').keyup(function(){
    checkEmail(this);
    if ( $('#errorLog').hasClass('hide') ) {
        console.log('email is valid');
        emailValid = true;
    } else {
        console.log('email is not valid');
        emailValid = false;
    }
    checkTermValid();
});

//동의사항 체크여부
var agreementValid = false
$('#checkAllAgreement').click(function(){
    if ( $('#checkAllAgreement input').is(':checked') ) {
        console.log('term is all checked');
        agreementValid = true;
    } else {
        console.log('term is not checked');
        agreementValid = false;
    }
    checkTermValid();
});

//투자계약서 Validation check
function checkTermValid() {
    if ( (homeValid || emailValid) && agreementValid ){
        console.log('all valid');
        $('.btn-confirm').removeAttr('disabled');
    } else {
        $('.btn-confirm').attr('disabled', 'disabled');
    }
}
