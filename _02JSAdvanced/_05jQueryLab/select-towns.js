function attachEvents() {
    function selectTown(e) {
        let self = $(this);
        if (self.attr('data-selected')) {
            self.removeAttr('data-selected');
            self.css('background', '');
        } else {
            self.attr('data-selected', 'true');
            self.css('background', '#DDD');
        }
    }

    $('#items').on('click', 'li', selectTown);

    function showSelected() {
        let selLi = $('#items li[data-selected=true]');
        let towns = selLi.toArray()
            .map(li => li.textContent)
            .join(', ');
        $('#selectedTowns').text('Selected towns: ' + towns);
    }

    $('#showTownsButton').on('click', showSelected);
}