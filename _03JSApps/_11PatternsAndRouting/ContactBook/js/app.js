const handlers = {};

$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbr');

        this.get('index.html', displayWelcome);

        function displayWelcome() {
            this.loadPartials({
                header: './templates/common/header.hbr',
                footer: './templates/common/footer.hbr'
            }).then(function () {
                console.log('displaying welcome screen...');
                this.partial('./templates/welcome.hbr');
            });
        }

        this.get('#/register', function () {
            this.loadPartials({
                header: './templates/common/header.hbr',
                footer: './templates/common/footer.hbr'
            }).then(function () {
                this.partial('./templates/register.hbr');
            });
        });

        this.get('#/contacts', handlers.contactsController);

        this.get('#/profile', function () {
            this.loadPartials({
                header: './templates/common/header.hbr',
                footer: './templates/common/footer.hbr'
            }).then(function () {
                this.partial('./templates/profile.hbr');
            });
        });

        this.get('#/logout', function (context) {
            auth.logout()
                .then(function () {
                    localStorage.clear();
                    context.redirect('#');
                })
                .catch(error => console.log(error));
        });

        this.post('#/login', function (context) {
            let username = context.params.username;
            let password = context.params.password;
            auth.login(username, password)
                .then(function (data) {
                    auth.saveSession(data);
                    context.redirect('#/contacts')
                })
                .catch(error => console.log(error));
        });

        this.post('#/register', function () {

        });

        this.post('#/profile', function () {

        });

        this.get('', displayWelcome);

    }).run();
});