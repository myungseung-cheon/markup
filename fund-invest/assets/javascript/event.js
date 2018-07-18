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
        window.location.href = "b1-product_detail_invest_only.html";
    });
    $(".list-recommend-keyword").click(function(){
        window.location.href = "a4-recommend_detail.html";
    });
    $("#banner > button").click(function(){
        window.location.href = "a3-start_guide.html";
    });
    $("body > section.px-4.py-7.text-center.gray50 > a").click(function(){
        window.location.href = "a1-main.html";
    });
    $("#exampleModalName > div > div > div.block-btn__box > button.btn-next").click(function(){
        window.location.href = "c1-buy_amount.html";
    });
    $("#invest_amount > div.sheet > form > div.fixed-bottom *").click(function(){
        window.location.href = "c2-buy_contract.html";
    });
    $("#contractSummary > div.sheet.pb-6.gray0.__ghostlab-hover__ > button").click(function(){
        window.location.href = "c1-buy_amount.html";
    });
    $("#contractSummary > div.sheet.pb-6.gray0 > button").click(function(){
        window.location.href = "e2-portfolio_detail_buy_waiting.html";
    });
    $("#goToPortfolio button").click(function(){
        window.location.href = "e1-portfolio.html";
    });
    $("#tabToHistory").click(function(){
        window.location.href = "e1-portfolio.html";
    });
    $("#tabToPurchase").click(function(){
        window.location.href = "a2-main_activated.html";
    });
    $("#subscribtionSetting").click(function(){
        window.location.href = 'b4-subscribe-setting.html';
    });
    $("#portfolioItems > table").click(function(){
        window.location.href = "b2-product_detail_investing.html";
    });
    $("#waitingList > table").click(function(){
        window.location.href = "e2-portfolio_detail_buy.html";
    });
    $("#blockButtons > div.block-btn__box > button.btn-sell").click(function(){
        window.location.href = "c4-sell_amount.html";
    });
    $("#sell_amount div.fixed-bottom").click(function(){
        window.location.href = "c5-sell_contract.html";
        console.log = 'clicked';
    });
    $("#contractSummary > div.sheet.mb-7 > div > div.block-btn__box > input").click(function(){
        window.location.href = "e3-portfolio_detail_sell_waiting.html";
    });
    // $("#").click(function(){
    //     window.location.href = "e1-portfolio.html";
    // });
    // $("#").click(function(){
    //     window.location.href = "e1-portfolio.html";
    // });

});
