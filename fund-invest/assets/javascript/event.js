$(document).ready(function(){

    // 성향 카드 선택
    $('.filter-card').click(function(){

        var title = $(this).children('.title').text();
        var btn = $('#filterButton');

        // 선택된 카드 변경
        $('.filter-card').removeClass('selected');
        $('#filterButton').removeClass('btn-danger').removeClass('btn-warning').removeClass('btn-success');
        $(this).addClass('selected');

        // 필터 버튼 변경
        btn.children('.name').text(title);
        if ( $('#filterAggressive').hasClass('selected') ) {
            btn.addClass('btn-danger');
        } else if ( $('#filterBeneficial').hasClass('selected') ) {
            btn.addClass('btn-warning');
        } else if ( $('#filterStable').hasClass('selected') ) {
            btn.addClass('btn-success');
        }
    });

    // 필터 선택 col 강조
    var firstOptionCol = $('.stockList tr th:nth-child(2), .stockList tr td:nth-child(3)');
    var secondOptionCol = $('.stockList tr th:nth-child(3), .stockList tr td:nth-child(4)');
    secondOptionCol.addClass('col-option-selected');

    // 구매자/판매자
    $('#modalOptionFilter button').click(function(){
        var optionText = $(this).text();
        var th = $("[data-target='#modalOptionFilter'] span");

        $('#modalOptionFilter button').toggleClass('oi oi-check');
        th.text(optionText);

        firstOptionCol.addClass('col-option-selected');
        secondOptionCol.removeClass('col-option-selected');
    });

    // 수익률
    $('#profitFilter button').click(function(){
        $('#profitFilter button').removeClass('oi oi-check');
        $(this).addClass('oi oi-check');
        firstOptionCol.removeClass('col-option-selected');
        secondOptionCol.addClass('col-option-selected');
    });

    // 매월 반복 옵션
    $("label:contains('매월 반복')").click(function(){
        $('#repeatOption').removeClass('hide');
        $('body').stop().animate({scrollTop:178});
    })
    $("label:contains('한 번만')").click(function(){
        $('body').stop().animate({scrollTop:0}, function(){
            $('#repeatOption').addClass('hide');
        });

    })

});
