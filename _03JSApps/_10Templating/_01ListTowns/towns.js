function attachEvents() {
    let townsSource = $('#towns-template').html();
    let townsTemplate = Handlebars.compile(townsSource);
    let sourceElem = $('#towns');
    let outputElem = $('#root');

    $('#btnLoadTowns').on('click', e => {
        let towns = sourceElem.val().split(',').map(a => a.toString().trim()).filter(a => a !== '');
        let townsHtml = townsTemplate({towns: towns});
        outputElem.empty().append(townsHtml);
    });
}