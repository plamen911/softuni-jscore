$(() => {
    let contactItemSource = $("#contact-item-template").html();
    let contactListSource = $("#contact-list-template").html();
    let contactDetailsSource = $("#contact-details-template").html();

    Handlebars.registerPartial('contact', contactItemSource);
    let contactListTemplate = Handlebars.compile(contactListSource);
    let contactDetailsTemplate = Handlebars.compile(contactDetailsSource);

    let contactListHolder = $('#list').find('.content');
    let contactDetailsHolder = $('#details').find('.content');

    // load data
    $.get('data.json', contacts => {
        let listHtml = contactListTemplate({contacts});
        contactListHolder.empty().append(listHtml);

        $('div.contact').on('click', e => {
            let self = $(e.target);
            let idx = (self.hasClass('contact')) ? self.attr('data-id') : self.closest('.contact').attr('data-id');
            let detailsHtml = contactDetailsTemplate(contacts[idx]);
            contactDetailsHolder.empty().append(detailsHtml);
        });
    });
});