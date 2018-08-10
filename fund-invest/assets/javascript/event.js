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
    // $('#modalOptionFilter button').click(function(){
    //     var optionText = $(this).text();
    //     var th = $("[data-target='#modalOptionFilter'] span");
    //
    //     $('#modalOptionFilter button').toggleClass('oi oi-check');
    //     th.text(optionText);
    //
    //     firstOptionCol.addClass('col-option-selected');
    //     secondOptionCol.removeClass('col-option-selected');
    // });

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

    // 페이지 프리뷰용 링크
    $(".list-item, .list-recommend-rank").click(function(){
        window.location.href = "product_detail_invest_only.html";
    });
    $(".list-recommend-keyword").click(function(){
        window.location.href = "recommend_detail.html";
    });
    $("#banner > button").click(function(){
        window.location.href = "start_guide.html";
    });
    $("body > section.px-4.py-7.text-center.gray50 > a").click(function(){
        window.location.href = "main.html";
    });
    $("#exampleModalName > div > div > div.block-btn__box > button.btn-next").click(function(){
        window.location.href = "buy_amount.html";
    });
    $("#invest_amount > div.sheet > div.fixed-bottom > div.block-btn__box > button").click(function(){
        window.location.href = "buy_contract.html";
    });
    $("#sellConfirm").click(function(){
        window.location.href = "portfolio_detail_sell_waiting.html";
    });
    $("#contractSummary > div.sheet.pb-6.gray0 > button").click(function(){
        window.location.href = "portfolio_detail_buy_waiting.html";
    });
    $("#goToPortfolio button").click(function(){
        window.location.href = "portfolio.html";
    });
    $("#tabToHistory").click(function(){
        window.location.href = "portfolio.html";
    });
    $("#tabToPurchase").click(function(){
        window.location.href = "main_activated.html";
    });
    $("#subscribtionSetting").click(function(){
        window.location.href = 'subscribe-setting.html';
    });
    $("#portfolioInvesting").click(function(){
        window.location.href = "product_detail_investing.html";
    });
    $("#portfolioGoToInvesting").click(function(){
        window.location.href = "product_detail_investing.html";
    });
    $("#waitingList > table").click(function(){
        window.location.href = "portfolio_detail_buy.html";
    });
    $("#blockButtons > div.block-btn__box > button.btn-sell").click(function(){
        window.location.href = "sell_amount.html";
    });
    $("#sell_amount div.fixed-bottom").click(function(){
        window.location.href = "sell_contract.html";
        console.log = 'clicked';
    });
    $("#contractSummary > div.sheet.mb-7 > div > div.block-btn__box > input").click(function(){
        window.location.href = "portfolio_detail_sell_waiting.html";
    });
    // $("#").click(function(){
    //     window.location.href = "e1-portfolio.html";
    // });
    // $("#").click(function(){
    //     window.location.href = "e1-portfolio.html";
    // });
    $('#buyAmount, #sellAmount').on('keyup', function() {
        $(this).val($(this).val().split(',').join(''));
        $(this).val(($(this).val()).replace(/\B(?=(?:\d{3})+(?!\d))/g, ","));

    });

});
