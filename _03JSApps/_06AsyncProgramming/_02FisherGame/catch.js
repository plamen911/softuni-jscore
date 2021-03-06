function attachEvents() {
    const APP_KEY = `kid_SJFuHh4Ub`;
    const USER_ENCRYPT = btoa('guest:guest');
    const BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}/biggestCatches`;

    let defaultRequest = {
        url: BASE_URL,
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + USER_ENCRYPT,
            'X-Kinvey-API-Version': 3
        },
        contentType: 'application/json'
    };

    function loadCatches() {
        let catches = $('#catches');
        catches.html('Loading...')

        function displayCatches(entries) {
            catches.empty();
            for (let entry of entries) {

                let anglerInput = $('<input>').attr('type', 'text').addClass('angler').val(entry.angler);
                let weightInput = $('<input>').attr('type', 'number').addClass('weight').val(entry.weight);
                let speciesInput = $('<input>').attr('type', 'text').addClass('species').val(entry.species);
                let locationInput = $('<input>').attr('type', 'text').addClass('location').val(entry.location);
                let baitInput = $('<input>').attr('type', 'text').addClass('bait').val(entry.bait);
                let captureTimeInput = $('<input>').attr('type', 'number').addClass('captureTime').val(entry.captureTime);
                let updateBtn = $('<button>').addClass('update').text('Update').click(updateCatches);
                let deleteBtn = $('<button>').addClass('delete').text('Delete').click(deleteCatches);

                let wrapper = $('<div>').addClass('catch').attr('data-id', entry._id)
                    .append($('<label>Angler</label>'))
                    .append(anglerInput)
                    .append($('<label>Weight</label>'))
                    .append(weightInput)
                    .append($('<label>Species</label>'))
                    .append(speciesInput)
                    .append($('<label>Location</label>'))
                    .append(locationInput)
                    .append($('<label>Bait</label>'))
                    .append(baitInput)
                    .append($('<label>Capture Time</label>'))
                    .append(captureTimeInput)
                    .append(updateBtn)
                    .append(deleteBtn);
                catches.append(wrapper);

                function updateCatches() {
                    let request = Object.assign({}, defaultRequest);
                    request.url = BASE_URL + '/' + entry._id;
                    request.method = 'PUT';
                    request.data = JSON.stringify({
                        "angler": anglerInput.val(),
                        "weight": Number(weightInput.val()),
                        "species": speciesInput.val(),
                        "location": locationInput.val(),
                        "bait": baitInput.val(),
                        "captureTime": Number(captureTimeInput.val())
                    });

                    updateBtn.prop('disabled', true).text('wait...');

                    $.ajax(request)
                        .then(result => {
                            anglerInput.val(result.angler);
                            weightInput.val(result.weight);
                            speciesInput.val(result.species);
                            locationInput.val(result.location);
                            baitInput.val(result.bait);
                            captureTimeInput.val(result.captureTime);
                        })
                        .catch(displayError)
                        .always(() => {
                            updateBtn.prop('disabled', false).text('Update');
                        });
                }

                function deleteCatches() {
                    let request = Object.assign({}, defaultRequest);
                    request.url = BASE_URL + '/' + entry._id;
                    request.method = 'DELETE';

                    deleteBtn.prop('disabled', true).text('wait...');

                    $.ajax(request)
                        .then(result => {
                            // catches.remove(wrapper);
                            wrapper.remove();
                        })
                        .catch(displayError);
                }
            }
        }

        let request = Object.assign({}, defaultRequest);
        $.get(request)
            .then(displayCatches)
            .catch(displayError)
    }

    function addNewCatch() {
        let anglerInput = $('#addForm .angler');
        let weightInput = $('#addForm .weight');
        let speciesInput = $('#addForm .species');
        let locationInput = $('#addForm .location');
        let baitInput = $('#addForm .bait');
        let captureTimeInput = $('#addForm .captureTime');

        if (!anglerInput.val()) {
            alert('Please enter angler');
            anglerInput.focus();
            return false;
        }

        let request = Object.assign({}, defaultRequest);
        request.url = BASE_URL;
        request.method = 'POST';
        request.data = JSON.stringify({
            "angler": anglerInput.val(),
            "weight": Number(weightInput.val()),
            "species": speciesInput.val(),
            "location": locationInput.val(),
            "bait": baitInput.val(),
            "captureTime": Number(captureTimeInput.val())
        });

        let addBtn = $(this);
        addBtn.prop('disabled', true).text('wait...');

        $.ajax(request)
            .then(result => {
                anglerInput.val('');
                weightInput.val('');
                speciesInput.val('');
                locationInput.val('');
                baitInput.val('');
                captureTimeInput.val('');

                loadCatches();
            })
            .catch(displayError)
            .always(() => {
                addBtn.prop('disabled', false).text('Add');
            });
    }

    function displayError(err) {
        console.error(err);
    }

    $('.load').click(loadCatches);
    $('.add').click(addNewCatch);
}