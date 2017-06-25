function attachEvents() {
    $('.button').click((e) => {
        e.preventDefault();
        $('.selected').removeClass('selected');
        $(e.target).addClass('selected');
    });
}