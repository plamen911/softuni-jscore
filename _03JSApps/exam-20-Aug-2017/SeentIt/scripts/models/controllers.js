let controllers = (() => {
    function getHome(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            loginForm: './templates/home/loginForm.hbs',
            registerForm: './templates/home/registerForm.hbs'
        }).then(function () {
            this.partial('./templates/home/homePage.hbs');
        });
    }

    function postLogin(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        if (!username) {
            return auth.showError('Username is required.');
        }
        if (username.toString().length < 3) {
            return auth.showError('Username should be at least 3 characters long.');
        }
        if (! /^[a-zA-Z]{3,}$/.test(username)) {
            return auth.showError('Username should contain only english alphabet letters.');
        }
        if (!password) {
            return auth.showError('Password is required.');
        }
        if (password.toString().length < 6) {
            return auth.showError('Password should be at least 6 characters long.');
        }
        if (! /^[a-zA-Z0-9]{6,}$/.test(password)) {
            return auth.showError('Password should contain only english alphabet letters and digits.');
        }

        auth.login(username, password)
            .then(function (userInfo) {
                $('input[name="username"]', '#loginForm').val('');
                $('input[name="password"]', '#loginForm').val('');
                auth.saveSession(userInfo);
                auth.showInfo('Login successful.');
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function postLogout(ctx) {
        auth.logout()
            .then(function () {
                localStorage.clear();
                auth.showInfo('Logout successful.');
                ctx.redirect('#/home');
            })
            .catch(auth.handleError);
    }

    function postRegister(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let repeatPassword = ctx.params.repeatPass;

        if (!username) {
            return auth.showError('Username is required.');
        }
        if (username.toString().length < 3) {
            return auth.showError('Username should be at least 3 characters long.');
        }
        if (! /^[a-zA-Z]{3,}$/.test(username)) {
            return auth.showError('Username should contain only english alphabet letters.');
        }
        if (!password) {
            return auth.showError('Password is required.');
        }
        if (password.toString().length < 6) {
            return auth.showError('Password should be at least 6 characters long.');
        }
        if (! /^[a-zA-Z0-9]{6,}$/.test(password)) {
            return auth.showError('Password should contain only english alphabet letters and digits.');
        }
        if (password !== repeatPassword) {
            return auth.showError('Passwords do not match.');
        }

        auth.register(username, password)
            .then(function (userInfo) {
                $('input[name="username"]', '#registerForm').val('');
                $('input[name="password"]', '#registerForm').val('');
                $('input[name="repeatPass"]', '#registerForm').val('');
                auth.saveSession(userInfo);
                auth.showInfo('User registration successful.')
                ctx.redirect('#/catalog')
            })
            .catch(auth.handleError);
    }

    function getCatalog(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();

        catalogService.loadPosts()
            .then(function (posts) {
                posts.forEach((p, index) => {
                    p.rank = index + 1;
                    p.daysAgo = calcTime(p._kmd.ect);
                    p.isAuthor = auth.isAuthor(p);
                });
                ctx.posts = posts;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    menu: './templates/common/menu.hbs',
                    post: './templates/catalog/post.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/catalogPage.hbs');
                })
            })
            .catch(auth.handleError);
    }

    function getMyCatalog(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();

        catalogService.loadMyPosts()
            .then(function (posts) {
                posts.forEach((p, index) => {
                    p.rank = index + 1;
                    p.daysAgo = calcTime(p._kmd.ect);
                    p.isAuthor = auth.isAuthor(p);
                });
                ctx.posts = posts;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    menu: './templates/common/menu.hbs',
                    post: './templates/myposts/post.hbs'
                }).then(function () {
                    this.partial('./templates/myposts/catalogPage.hbs');
                })
            })
            .catch(auth.handleError);
    }

    function postCreatePost(ctx) {
        let url = ctx.params.url;
        let title = ctx.params.title;
        let imageUrl = ctx.params.image;
        let description = ctx.params.comment;

        if (!url) {
            return auth.showError('Link Url is not optional.');
        }
        if (url.toString().indexOf('http') !== 0) {
            return auth.showError('Link Url is invalid.');
        }
        if (!title) {
            return auth.showError('Title is not optional.');
        }

        catalogService.createPost(url, title, imageUrl, description)
            .then(function () {
                auth.showInfo(`Post created.`);
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function postCreateComment(ctx) {
        let postId = ctx.params.id.substr(1);
        let content = ctx.params.content;

        if (!content) {
            return auth.showError('Comment content is required.');
        }

        catalogService.createComment(postId, content)
            .then(function () {
                auth.showInfo(`Comment created.`);
                ctx.redirect('#/comments/:' + postId);
            })
            .catch(auth.handleError);
    }

    function getCreatePost(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();

        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            menu: './templates/common/menu.hbs',
            createForm: './templates/create-post/createForm.hbs'
        }).then(function () {
            this.partial('./templates/create-post/createPage.hbs')
        })
    }

    function postEditPost(ctx) {
        let postId = ctx.params.id.substr(1);
        let url = ctx.params.url;
        let title = ctx.params.title;
        let imageUrl = ctx.params.image;
        let description = ctx.params.comment;

        if (!url) {
            return auth.showError('Link Url is not optional.');
        }
        if (url.toString().indexOf('http') !== 0) {
            return auth.showError('Link Url is invalid.');
        }
        if (!title) {
            return auth.showError('Title is not optional.');
        }

        catalogService.editPost(postId, url, title, imageUrl, description)
            .then(function () {
                auth.showInfo(`Post ${title} updated.`);
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function getEditPost(ctx) {
        let postId = ctx.params.id.substr(1);
        catalogService.loadPostDetails(postId)
            .then(function (postInfo) {
                ctx.postId = postId;
                ctx.loggedIn = auth.isAuthed();
                ctx.username = auth.getUsername();
                ctx.url = postInfo.url;
                ctx.author = postInfo.author;
                ctx.title = postInfo.title;
                ctx.imageUrl = postInfo.imageUrl;
                ctx.description = postInfo.description;
                ctx.isAuthor = auth.isAuthor(postInfo);
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    menu: './templates/common/menu.hbs',
                    editForm: './templates/edit-post/editForm.hbs'
                }).then(function () {
                    this.partial('./templates/edit-post/editPage.hbs');
                })
            })
            .catch(auth.handleError);
    }

    function getComments(ctx) {
        let postId = ctx.params.id.substr(1);
        catalogService.loadPostDetails(postId)
            .then(function (postInfo) {
                catalogService.loadPostComments(postId)
                    .then(function (comments) {
                        ctx.postId = postId;
                        ctx.loggedIn = auth.isAuthed();
                        ctx.username = auth.getUsername();
                        ctx.url = postInfo.url;
                        ctx.author = postInfo.author;
                        ctx.title = postInfo.title;
                        ctx.imageUrl = postInfo.imageUrl;
                        ctx.description = postInfo.description;
                        ctx.isAuthor = auth.isAuthor(postInfo);

                        comments.forEach(p => {
                            p.daysAgo = calcTime(p._kmd.ect);
                            p.isAuthor = auth.isAuthor(p);
                        });
                        ctx.comments = comments;

                        ctx.loadPartials({
                            header: './templates/common/header.hbs',
                            footer: './templates/common/footer.hbs',
                            menu: './templates/common/menu.hbs',
                            comment: './templates/comments/comment.hbs',
                            commentForm: './templates/comments/commentForm.hbs'
                        }).then(function () {
                            this.partial('./templates/comments/commentsPage.hbs');
                        })
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    function getCatalogDetails(ctx) {
        let postId = ctx.params.id.substr(1);
        catalogService.loadPostDetails(postId)
            .then(function (postInfo) {
                ctx.postId = postId;
                ctx.loggedIn = auth.isAuthed();
                ctx.username = auth.getUsername();
                ctx.name = postInfo.name;
                ctx.comment = postInfo.comment;
                ctx.isAuthor = auth.isAuthor(postInfo);
                ctx.isOnTeam = auth.isOnTeam(postInfo);
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    teamControls: './templates/catalog/teamControls.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/details.hbs');
                })
            })
    }

    function getDeletePost(ctx) {
        let postId = ctx.params.id.substr(1);

        catalogService.deletePost(postId)
            .then(function () {
                auth.showInfo(`Post deleted.`);
                ctx.redirect('#/catalog');
            })
            .catch(auth.handleError);
    }

    function getDeleteComment(ctx) {
        let postId = ctx.params.id.substr(1);
        let commentId = ctx.params.commentId.substr(1);
        catalogService.deleteComment(commentId)
            .then(function () {
                auth.showInfo(`Comment deleted.`);
                ctx.redirect('#/comments/:' + postId);
            })
            .catch(auth.handleError);
    }

    return {
        getHome,
        postLogin,
        postRegister,
        getCatalog,
        postCreatePost,
        getCreatePost,
        postEditPost,
        getCatalogDetails,
        getEditPost,
        getComments,
        postLogout,
        getDeletePost,
        getMyCatalog,
        postCreateComment,
        getDeleteComment
    }
})();