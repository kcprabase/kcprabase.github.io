$(() => {
    let wallsTouched = false;
    let started = false;
    let gameOn = false;
    $('.boundary').mouseenter(function () {
        loser();
    });

    $('#start').mouseleave(function () {
        if (gameOn) {
            started = true;
            setStat("Game on...");
        }
    });

    $('#end').mouseenter(function () {
        if (!gameOn || !started) return;
        if (started) {
            setStat("You Win!!!");
        }
        gameOn = false;
        started = false;
    });

    $('#maze').mouseleave(function () {
        started = false;
        console.log('mouse left maze');
    });


    $(document).on('keypress', function (e) {
        if (e.key === 's') {
            reset();
        }
    });
    $('#start').click(function () {
        reset();
    });

    function reset() {
        $('.boundary').removeClass('youlose');
        wallsTouched = false;
        started = false;
        ended = false;
        gameOn = true;
        setStat("Not started");
    }

    function setStat(stat) {
        $('#stat').html(stat);
    }

    function loser() {
        if (started) {
            started = false;
            gameOn = false;
            $('.boundary').addClass('youlose');
            setStat("You Lose!");
        }
    }
});
