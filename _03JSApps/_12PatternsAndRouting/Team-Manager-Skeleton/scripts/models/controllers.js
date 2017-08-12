let controllers = (() => {
    function postCreateTeam(ctx) {
        let teamName = ctx.params.name;
        let teamComment = ctx.params.comment;
        teamsService.createTeam(teamName, teamComment)
            .then(function (data) {
                teamsService.joinTeam(data._id)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo(`TEAM ${teamName} HAS BEEN ADDED!`);
                        ctx.redirect('#/catalog');
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    function getCreateTeam(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            createForm: './templates/create/createForm.hbs'
        }).then(function () {
            this.partial('./templates/create/createPage.hbs')
        })
    }

    function postEditTeam(ctx) {
        let teamId = ctx.params.id.substr(1);
        let teamName = ctx.params.name;
        let teamComment = ctx.params.comment;
        teamsService.edit(teamId, teamName, teamComment)
            .then(function () {
                auth.showInfo(`TEAM ${teamName} EDITED!`);
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }

    function getCatalog(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.hasNoTeam = !auth.hasTeam();
        teamsService.loadTeams()
            .then(function (teams) {
                ctx.teams = teams;
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    team: './templates/catalog/team.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/teamCatalog.hbs');
                })
            })
            .catch(auth.handleError);
    }

    function getEditTeam(ctx) {
        let teamId = ctx.params.id.substr(1);
        teamsService.loadTeamDetails(teamId)
            .then(function (teamInfo) {
                ctx.teamId = teamId;
                ctx.loggedIn = auth.isAuthed();
                ctx.username = auth.getUsername();
                ctx.hasTeam = auth.hasTeam();
                ctx.name = teamInfo.name;
                ctx.comment = teamInfo.comment;
                ctx.isAuthor = auth.isAuthor(teamInfo);
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    editForm: './templates/edit/editForm.hbs'
                }).then(function () {
                    this.partial('./templates/edit/editPage.hbs');
                })
            })
            .catch(auth.handleError);
    }

    function getCatalogDetails(ctx) {
        let teamId = ctx.params.id.substr(1);
        teamsService.loadTeamDetails(teamId)
            .then(function (teamInfo) {
                ctx.teamId = teamId;
                ctx.loggedIn = auth.isAuthed();
                ctx.username = auth.getUsername();
                ctx.hasTeam = auth.hasTeam();
                ctx.name = teamInfo.name;
                ctx.comment = teamInfo.comment;
                ctx.isAuthor = auth.isAuthor(teamInfo);
                ctx.isOnTeam = auth.isOnTeam(teamInfo);
                ctx.loadPartials({
                    header: './templates/common/header.hbs',
                    footer: './templates/common/footer.hbs',
                    teamControls: './templates/catalog/teamControls.hbs'
                }).then(function () {
                    this.partial('./templates/catalog/details.hbs');
                })
            })
    }

    function postJoinTeam(ctx) {
        let teamId = ctx.params.id.substr(1);
        teamsService.joinTeam(teamId)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('JOINED TEAM!');
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }

    function postLeaveTeam(ctx) {
        teamsService.leaveTeam()
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('TEAM LEAVED!');
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }

    function postRegister(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let repeatPassword = ctx.params.repeatPassword;

        if (!username) {
            return auth.showError('Username is required.');
        }
        if (!password) {
            return auth.showError('Password is required.');
        }
        if (password !== repeatPassword) {
            return auth.showError('Passwords do not match.');
        }

        auth.register(username, password)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('REGISTERED SUCCESSFULLY!')
                ctx.redirect('#/home')
            })
            .catch(auth.handleError);
    }

    function postLogin(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        auth.login(username, password)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('LOGGED IN!');
                ctx.redirect('#/home');
            })
            .catch(auth.handleError);
    }

    function postLogout(ctx) {
        auth.logout()
            .then(function () {
                localStorage.clear();
                auth.showInfo('LOGGED OUT!');
                ctx.redirect('#/home');
            })
            .catch(auth.handleError);
    }

    function getHome(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.hasTeam = auth.hasTeam();
        ctx.teamId = auth.getTeamId();
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    }

    function getAbout(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.hasTeam = auth.hasTeam();
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs'
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    }

    function getLogin(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.hasTeam = auth.hasTeam();
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            loginForm: './templates/login/loginForm.hbs',
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    }

    function getRegister(ctx) {
        ctx.loggedIn = auth.isAuthed();
        ctx.username = auth.getUsername();
        ctx.hasTeam = auth.hasTeam();
        ctx.loadPartials({
            header: './templates/common/header.hbs',
            footer: './templates/common/footer.hbs',
            registerForm: './templates/register/registerForm.hbs',
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    }

    return {
        postCreateTeam,
        getCreateTeam,
        postEditTeam,
        getCatalog,
        getCatalogDetails,
        getEditTeam,
        postRegister,
        postLogin,
        postLogout,
        getHome,
        getAbout,
        getLogin,
        getRegister,
        postJoinTeam,
        postLeaveTeam
    }
})();