function createBook(selector, titleName, authorName, isbn) {
    let bookGenerator = (function () {
        let id = 1;

        return function (selector, titleName, authorName, isbn) {
            let container = $(selector);

            let bookContainer = $(`<div>`);
            bookContainer.attr('id', `book${id}`);
            bookContainer.attr('border', 'none');

            $(`<p class="title">${titleName}</p>`)
                .appendTo(bookContainer);

            $(`<p class="author">${authorName}</p>`)
                .appendTo(bookContainer);

            $(`<p class="isbn">${isbn}</p>`)
                .appendTo(bookContainer);

            let btnSelect = $(`<button>Select</button>`);
            let btnDeselect = $(`<button>Deselect</button>`);

            btnSelect.on('click', () => bookContainer.css('border', '2px solid blue'));
            btnDeselect.on('click', () => bookContainer.css('border', 'none'));

            btnSelect.appendTo(bookContainer);
            btnDeselect.appendTo(bookContainer);

            container.append(bookContainer);

            id++;
        }
    }());

    bookGenerator(selector, titleName, authorName, isbn);
    // bookGenerator(selector, titleName, authorName, isbn);
    // bookGenerator(selector, titleName, authorName, isbn);
}

