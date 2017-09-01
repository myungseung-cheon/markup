$(document).ready(function(){
    $('.filter-card').click(function(){

        $('.filter-card').removeClass('selected');
        $(this).addClass('selected');
        if ( $('#filterAggressive').hasClass('selected') ) {
            $('#filterButton').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').addClass('btn-danger');
        } else if ( $('#filterBeneficial').hasClass('selected') ) {
            $('#filterButton').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').addClass('btn-warning');
        } else if ( $('#filterStable').hasClass('selected') ) {
            $('#filterButton').removeClass('btn-success').removeClass('btn-danger').removeClass('btn-warning').addClass('btn-success');
        }

    });

    $('#optionFilter button').click(function(){
        var text = $(this).text();
        $('#optionFilter button').toggleClass('oi oi-check');
        $('#optionName').text(text);

    });
    $('#profitFilter button').click(function(){
        $('#profitFilter button').removeClass('oi oi-check');
        $(this).addClass('oi oi-check');
    });
});
