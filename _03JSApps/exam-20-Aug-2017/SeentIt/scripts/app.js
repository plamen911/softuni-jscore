$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        $(document).on({
            ajaxStart: function () {
                $("#loadingBox").show();
            },
            ajaxStop: function () {
                $("#loadingBox").hide();
            }
        });

        // routes
        this.get('index.html', controllers.getHome);
        this.get('#/home', controllers.getHome);
        this.post('#/login', controllers.postLogin);
        this.post('#/register', controllers.postRegister);
        this.get('#/catalog', controllers.getCatalog);
        this.get('#/logout', controllers.postLogout);
        this.get('#/create-post', controllers.getCreatePost);
        this.post('#/create-post', controllers.postCreatePost);
        this.get('#/edit-post/:id', controllers.getEditPost);
        this.post('#/edit-post/:id', controllers.postEditPost);
        this.get('#/delete-post/:id', controllers.getDeletePost);
        this.get('#/myposts', controllers.getMyCatalog);
        this.get('#/comments/:id', controllers.getComments);
        this.post('#/create-comment/:id', controllers.postCreateComment);
        this.get('#/delete-comment/:id/:commentId', controllers.getDeleteComment);
    });

    app.run();
});
