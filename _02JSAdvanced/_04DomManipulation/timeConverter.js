function attachEventsListeners() {
    let daysBtn = document.querySelector('#daysBtn');
    let hoursBtn = document.querySelector('#hoursBtn');
    let minutesBtn = document.querySelector('#minutesBtn');
    let secondsBtn = document.querySelector('#secondsBtn');

    let daysInput = document.querySelector('#days');
    let hoursInput = document.querySelector('#hours');
    let minutesInput = document.querySelector('#minutes');
    let secondsInput = document.querySelector('#seconds');

    function handleClick(event) {
        switch (event.target.id) {
            case 'daysBtn':
                let days = Number(daysInput.value);
                hoursInput.value = days * 24;
                minutesInput.value = days * 24 * 60;
                secondsInput.value = days * 24 * 60 * 60;
                break;

            case 'hoursBtn':
                let hours = Number(hoursInput.value);
                daysInput.value = hours / 24;
                minutesInput.value = hours * 60;
                secondsInput.value = hours * 60 * 60;
                break;

            case 'minutesBtn':
                let minutes = Number(minutesInput.value);
                daysInput.value = minutes / 24 / 60;
                hoursInput.value = minutes / 60;
                secondsInput.value = minutes * 60;
                break;

            case 'secondsBtn':
                let seconds = Number(secondsInput.value);
                daysInput.value = seconds / 24 / 60 / 60;
                hoursInput.value = seconds / 60 / 60;
                minutesInput.value = seconds / 60;
                break;
        }
    }

    daysBtn.addEventListener('click', handleClick);
    hoursBtn.addEventListener('click', handleClick);
    minutesBtn.addEventListener('click', handleClick);
    secondsBtn.addEventListener('click', handleClick);
}