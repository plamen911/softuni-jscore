function attachEventsListeners() {
    let inputDistance = document.querySelector('#inputDistance');
    let inputUnits = document.querySelector('#inputUnits');
    let convert = document.querySelector('#convert');
    let outputDistance = document.querySelector('#outputDistance');
    let outputUnits = document.querySelector('#outputUnits');

    let rates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254
    };

    function calculate() {
        let fromDistance = Number(inputDistance.value);
        let fromUnit = inputUnits.value;
        let toUnit = outputUnits.value;

        outputDistance.value = fromDistance * rates[fromUnit] / rates[toUnit];
    }

    convert.addEventListener('click', calculate);
}