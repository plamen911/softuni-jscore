class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
    }

    render(id) {
        let divInfo = $('<div>').addClass('info').css('display', 'none');
        let spanPhone = $('<span>').html('&phone; ' + this.phone);
        let spanEmail = $('<span>').html('&#9993; ' + this.email);
        divInfo.append(spanPhone).append(spanEmail);

        let divTitle = $('<div>').addClass('title');
        if (this.online) {
            divTitle.addClass('online');
        }
        divTitle.text(this.firstName + ' ' + this.lastName);
        let button = $('<button>').html('&#8505;');
        button.click((e) => {
            e.preventDefault();
            divInfo.toggle();
        });
        divTitle.append(button);

        let article = $('<article>');
        article.append(divTitle);
        article.append(divInfo);

        $('#' + id).append(article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);
