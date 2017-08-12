let auth = (() => {
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('teamId', userInfo.teamId);
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return requester.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password, repeatPassword) {
        let userData = {
            username,
            password
        };

        return requester.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return requester.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        showError(reason.responseJSON.description);
    }

    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(() => infoBox.fadeOut(), 3000);
    }

    function showError(message) {
        let errorBox = $('#errorBox');
        errorBox.text(message);
        errorBox.show();
        setTimeout(() => errorBox.fadeOut(), 3000);
    }

    function isAuthed() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function getUsername() {
        if (!isAuthed()) {
            return '';
        }
        return sessionStorage.getItem('username');
    }
    
    function hasTeam() {
        return typeof sessionStorage.getItem('teamId') === 'undefined' || sessionStorage.getItem('teamId') === null;
    }

    function getTeamId() {
        return sessionStorage.getItem('teamId');
    }

    function isAuthor(teamInfo) {
        return teamInfo._acl.creator === sessionStorage.getItem('userId');
    }

    function isOnTeam(teamInfo) {
        return teamInfo._id === sessionStorage.getItem('teamId');
    }

    return {
        login,
        register,
        logout,
        saveSession,
        showInfo,
        showError,
        handleError,
        isAuthed,
        getUsername,
        hasTeam,
        getTeamId,
        isAuthor,
        isOnTeam
    }
})();