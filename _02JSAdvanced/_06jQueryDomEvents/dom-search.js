function domSearch(selector, caseInsensitive) {
    let container = $(selector);
    container.addClass('items-control');

    let addDiv = $(`<div class="add-controls">`);
    let addLabel = $('<label>');
    let inputText = $('<input>');
    addLabel
        .append('Enter text: ')
        .append(inputText);
    let addBtn = $(`<a class="button" style="display: inline-block;">Add</a>`);
    addDiv
        .append(addLabel)
        .append(addBtn);

    let searchDiv = $(`<div class="search-controls">`);
    let searchLabel = $('<label>');
    let searchInput = $('<input>');
    searchLabel
        .append('Search:')
        .append(searchInput);

    searchDiv.append(searchLabel);

    let resultDiv = $(`<div class="result-controls">`);
    let resultUl = $('<ul class="items-list">')
    resultDiv.append(resultUl);

    container
        .append(addDiv)
        .append(searchDiv)
        .append(resultDiv);

    addBtn.on('click', function (e) {
        e.preventDefault();
        revealResults();
        let li = $('<li class="list-item">');
        let delLink = $('<a class="button">X</a>');
        li
            .append(delLink)
            .append('<strong>' + inputText.val() + '</strong>');
        resultUl.append(li);
        inputText.val('');

        delLink.on('click', function (e) {
            e.preventDefault();
            $(this).closest('li').remove();
        })
    });

    searchInput.on('keyup', function() {
        let term = $(this).val().toString();
        revealResults();
        resultUl.find('li').each(function(){
            let currentVal = $(this).text().toString().substr(1);
            if (!caseInsensitive) {
                if (currentVal.toLowerCase().indexOf(term.toLowerCase()) === -1) {
                    $(this).css('display', 'none');
                }
            } else {
                let pos = currentVal.indexOf(term);
                if (pos === -1) {
                    $(this).css('display', 'none');
                }
            }
        });
    });

    function revealResults() {
        $('.list-item').css('display', 'block');
    }
}