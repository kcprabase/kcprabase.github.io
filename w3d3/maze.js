$(() => {
    let wallsTouched = false;
    let started = false;
    let ended = false;
    let gameOn = false;
    $('.boundary').mouseover(function () {
        if (gameOn && started) wallsTouched = true;
        // $('.boundary').addClass('youlose');
        // alert("You Lose!");
    });

    $('#start').mouseenter(function () {
        if (gameOn) started = true;
    });

    $('#end').mouseenter(function () {
        if (gameOn && started) ended = true;
    });

    $('#end').mouseleave(function () {
        if (!gameOn) return;
        if (started && ended) {
            if (wallsTouched) {
                $('.boundary').addClass('youlose');
                setTimeout(alert, 5, "You Lose!");

            } else {
                alert("You Win!!!");
            }
        }
        gameOn = false;
    });

    $(document).on('keypress', function (e) {
        if (e.key === 's') {
            reset();
        }
    });

    function reset() {
        $('.boundary').removeClass('youlose');
        wallsTouched = false;
        started = false;
        ended = false;
        gameOn = true;
    }
});
