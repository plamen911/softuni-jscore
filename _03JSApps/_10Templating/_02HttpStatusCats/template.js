$(() => {
    renderCatTemplate();

    function renderCatTemplate() {
    	let cats = window.cats;
    	let outputElem = $('#allCats');

        let catSource = $('#cat-template').html();
    	let catTemplate = Handlebars.compile(catSource);
		let catsHtml = catTemplate({cats});
		
		outputElem.empty().append(catsHtml);

		outputElem.find('button').on('click', e => {
			let self = $(e.target);
			let infoDiv = self.next();

			infoDiv.toggle();

			if (infoDiv.css('display') === 'none') {
				self.text('Show status code');
			} else {
				self.text('Hide status code');
			}
		});
    }

})
