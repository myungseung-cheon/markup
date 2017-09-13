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

    // 구매자/판매자
    $('#modalOptionFilter button').click(function(){
        var text = $(this).text();
        $('#modalOptionFilter button').toggleClass('oi oi-check');
        $("[data-target='#modalOptionFilter'] span").text(text);

    });
    // 수익률
    $('#profitFilter button').click(function(){
        $('#profitFilter button').removeClass('oi oi-check');
        $(this).addClass('oi oi-check');
    });

    //스크롤 이벤트
    var lastScrollTop = 0;
    $(window).scroll(function () {

        var src = $(this).scrollTop();
        var btn = $('#filterButton');
        var targetSrc = 860;

        // 모든 상품 영역을 볼 때 필터 보임
        if (src > targetSrc) {
            // 스크롤 내리는 중이면 필터 보임
            if(src < lastScrollTop) {
                btn.addClass('btn-hide');
            }
            // 스크롤 올리는 중이면 필터 가림
            else {
                btn.removeClass('btn-hide');
            }
            lastScrollTop = src;
        } else {
        // 모든 상품을 안볼 때 필터 가림
          btn.addClass('btn-hide');
        }
    });

    // Carousel 터치 슬라이드
    $(".carousel").swipe({

      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');

      },
      allowPageScroll:"vertical"

    });

});
