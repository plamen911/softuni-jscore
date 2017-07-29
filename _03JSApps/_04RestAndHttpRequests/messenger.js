'use strict';

function attachEvents() {
    let baseServiceUrl = `https://messengermarkov.firebaseio.com/messenger`;

    $('#submit').click(sendMessage);
    $('#refresh').click(loadMessages);

    loadMessages();

    function loadMessages() {
        $.get(baseServiceUrl + '.json')
            .then(displayMessages)
            .catch(displayError);
    }

    function displayMessages(data) {
        let messageArray = [];
        for (let key in data) {
            messageArray.push(data[key]);
        }

        let messages = '';
        messageArray
            .sort((a, b) => a.timestamp - b.timestamp)
            .forEach(m => messages += m.author + ': ' + m.content + '\n');
        $('#messages').val(messages);
        $('#messages').text(messages);
    }

    function sendMessage() {
        let newMessageJSON = JSON.stringify({
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        });

        $.post(baseServiceUrl + '.json', newMessageJSON)
            .then(loadMessages)
            .catch(displayError);

        $('#author').val('');
        $('#content').val('');
    }

    function displayError(err) {
        $('#messages').val($('#messages').val() + '\n' + err.message);
    }
}