$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        // routes
        this.get('index.html', controllers.getHome);
        this.get('#/home', controllers.getHome);
        this.get('#/about', controllers.getAbout);
        this.get('#/login', controllers.getLogin);
        this.get('#/register', controllers.getRegister);
        this.post('#/login', controllers.postLogin);
        this.get('#/logout', controllers.postLogout);
        this.post('#/register', controllers.postRegister);
        this.get('#/edit/:id', controllers.getEditTeam);
        this.post('#/edit/:id', controllers.postEditTeam);
        this.get('#/catalog', controllers.getCatalog);
        this.get('#/catalog/:id', controllers.getCatalogDetails);
        this.get('#/create', controllers.getCreateTeam);
        this.post('#/create', controllers.postCreateTeam);
        this.get('#/join/:id', controllers.postJoinTeam);
        this.get('#/leave', controllers.postLeaveTeam);
    });

    app.run();
});