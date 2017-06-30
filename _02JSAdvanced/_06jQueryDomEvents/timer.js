function timer() {
    let $hours = $('#hours');
    let $minutes = $('#minutes');
    let $seconds = $('#seconds');
    let $startBtn = $('#start-timer');
    let $stopBtn = $('#stop-timer');
    let step = 0;
    let timerId = null;

    function tick() {
        step++;

        let days = Math.floor(step / 24 / 60 / 60);
        let hoursLeft = Math.floor((step) - (days * 86400));
        let hh = Math.floor(hoursLeft / 3600);
        let minutesLeft = Math.floor((hoursLeft) - (hh * 3600));
        let mm = Math.floor(minutesLeft / 60);
        let ss = step % 60;

        $hours.text(`${('0' + hh).slice(-2)}`);
        $minutes.text(`${('0' + mm).slice(-2)}`);
        $seconds.text(`${('0' + ss).slice(-2)}`);
    }

    function startTimer() {
        timerId = window.setInterval(tick, 1000);
    }

    function stopTimer() {
        window.clearInterval(timerId);
        timerId = null;
    }

    $startBtn.on('click', startTimer);
    $stopBtn.on('click', stopTimer);
}