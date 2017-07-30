function attachEvents() {
    let serverUrl = 'https://judgetests.firebaseio.com/';

    function getWeather() {
        let userLocation = $.trim($('#location').val());

        // fetch all locations and get current location code
        let fetchLocationCode = new Promise((resolve, reject) => {
            $('#forecast').hide();
            $.get(serverUrl + 'locations.json')
                .then(locations => {
                    let locationCode = '';
                    for (let location of locations) {
                        if (userLocation.toString().toLowerCase() === location.name.toString().toLowerCase()) {
                            locationCode = location.code;
                        }
                    }

                    if (locationCode) {
                        resolve(locationCode);
                    } else {
                        reject(new Error('The location name cannot be found'));
                    }
                })
                .catch(error => reject(error));
        });

        // fetch location current conditions
        let fetchCurrentConditions = (locationCode) => {
            return new Promise((resolve, reject) => {
                $.get(serverUrl + 'forecast/today/' + locationCode + '.json')
                    .then(currentConditions => {
                        return resolve([locationCode, currentConditions])
                    })
                    .catch(error => reject(error));
            });
        };

        // fetch location current conditions
        let fetchUpcomingConditions = (data) => {
            let [locationCode, currentConditions] = data;
            return new Promise((resolve, reject) => {
                $.get(serverUrl + 'forecast/upcoming/' + locationCode + '.json')
                    .then(upcomingConditions => {
                        let conditionSymbols = {
                            "Sunny": "&#x2600;",
                            "Partly sunny": "&#x26C5;",
                            "Overcast": "&#x2601;",
                            "Rain": "&#x2614;",
                            "Degrees": "&#176;"
                        };

                        let condition = $('<span>').addClass('condition')
                            .append($('<span>').addClass('forecast-data').html(currentConditions.name))
                            .append($('<span>').addClass('forecast-data').html(currentConditions.forecast.low +
                                '&deg;/' + currentConditions.forecast.high + '&deg;'))
                            .append($('<span>').addClass('forecast-data').html(currentConditions.forecast.condition));

                        $('#current')
                            .append($('<span>')
                                .addClass('condition')
                                .addClass('symbol')
                                .html(conditionSymbols[currentConditions.forecast.condition]))
                            .append(condition);

                        let upcomingHolder = $('#upcoming');
                        for (let forecast of upcomingConditions.forecast) {
                            let upcoming = $('<span>').addClass('upcoming')
                                .append($('<span>').addClass('symbol')
                                    .html(conditionSymbols[forecast.condition]))
                                .append($('<span>').addClass('forecast-data').html(forecast.low +
                                    '&deg;/' + forecast.high + '&deg;'))
                                .append($('<span>').addClass('forecast-data').html(forecast.condition));

                            upcomingHolder.append(upcoming);
                        }

                        $('#forecast').show();

                        resolve([locationCode, currentConditions, upcomingConditions])
                    })
                    .catch(error => reject(error));
            });
        };

        fetchLocationCode
            .then(fetchCurrentConditions)
            .then(fetchUpcomingConditions)
            .catch(error => console.error(error));
    }

    $('#submit').click(getWeather);
}