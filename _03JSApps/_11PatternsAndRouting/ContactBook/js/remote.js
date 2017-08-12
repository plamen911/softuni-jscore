let remote = (() => {
    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_SJFuHh4Ub';
    const appSecret = 'e8a72defd9914dbd9a753448680f3e98';

    function makeAuth(type) {
        if (typeof type !== 'undefined' && type.toLowerCase() === 'basic') {
            return 'Basic ' + btoa(appKey + ':' + appSecret);
        } else {
            return 'Kinvey ' + localStorage.getItem('authtoken');
        }
    }

    function makeRequest(method, module, url, auth) {
        return {
            url: baseUrl + module + '/' + appKey + '/' + url,
            method,
            headers: {
                'Authorization': makeAuth(auth)
            }
        }
    }

    function get(module, url, auth) {
        return $.ajax(makeRequest('GET', module, url, auth));
    }

    function post(module, url, data, auth) {
        let req = makeRequest('POST', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }

    function update(module, url, data, auth) {
        let req = makeRequest('PUT', module, url, auth);
        req.data = JSON.stringify(data);
        req.headers['Content-Type'] = 'application/json';
        return $.ajax(req);
    }
    
    function remove(module, url, auth) {
        return $.ajax(makeRequest('DELETE', module, url, auth));
    }

    return {
        get, post, update, remove
    }
})();