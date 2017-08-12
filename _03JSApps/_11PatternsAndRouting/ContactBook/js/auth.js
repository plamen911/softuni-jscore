let auth = (() => {
    function saveSession(data) {
        localStorage.setItem('username', data.username);
        localStorage.setItem('id', data._id);
        localStorage.setItem('authtoken', data._kmd.authtoken);
    }

    function login(username, password) {
        // return new Promise((resolve, reject) => {
        //     remote.post('user', 'login', {username, password}, 'basic')
        //         .then(data => {
        //             saveSession(data);
        //             resolve(true);
        //         })
        //         .catch(error => reject(error));;
        // });
        return remote.post('user', 'login', {username, password}, 'basic');
    }

    function register(username, password) {
        return remote.post('user', '', {username, password}, 'basic');
    }

    function logout() {
        return remote.post('user', '_logout', {authtoken: localStorage.getItem('authtoken')}, 'Kinvey');
    }

    return {
        saveSession, login, register, logout
    }

})();