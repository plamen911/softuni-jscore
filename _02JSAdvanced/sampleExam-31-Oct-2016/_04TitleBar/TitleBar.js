class TitleBar {
    constructor(title) {
        this.title = title;
        this.links = [];
    }

    addLink(href, name) {
        let link = $('<a>')
            .addClass('menu-link')
            .attr('href', href)
            .text(name);
        this.links.push(link);
    }

    appendTo(selector) {
        let header = $('<header>')
            .addClass('header');
        let headerRow = $('<div>')
            .addClass('header-row');
        let linkButton = $('<a>')
            .addClass('button')
            .html('&#9776;');

        let spanTitle = $('<span>')
            .addClass('title')
            .html(this.title);

        let drawer = $('<div>')
            .addClass('drawer')
            .css('display', 'none');
        let menu = $('<nav>')
            .addClass('menu');

        linkButton.on('click', (e) => {
            e.preventDefault();
            if (drawer.css('display') === 'none') {
                drawer.css('display', 'block');
            } else {
                drawer.css('display', 'none');
            }
        });

        for (let i = 0; i < this.links.length; i++) {
            menu.append(this.links[i]);
        }
        drawer.append(menu);

        headerRow.append(linkButton);
        headerRow.append(spanTitle);
        header.append(headerRow);
        header.append(drawer);

        $(selector).append(header);
    }
}
