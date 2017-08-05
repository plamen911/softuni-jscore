function startApp() {
    // Clear user auth information at startup
    // sessionStorage.clear();

    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);
    $("#buttonEditAd").click(editAd);
    $("form").submit(function (event) {
        event.preventDefault()
    });

    // Bind the info / error boxes
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SJFuHh4Ub";
    const kinveyAppSecret = "e8a72defd9914dbd9a753448680f3e98";
    const kinveyAppAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
    };

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') == null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function loginUser() {
        const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function registerUser() {
        const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };
        $.ajax({
            method: "POST",
            url: kinveyRegisterUrl,
            headers: kinveyAppAuthHeaders,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');

        const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/posts";
        $.ajax({
            method: "GET",
            url: kinveyAdsUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads) {
            showInfo('Ads loaded.');
            if (ads.length === 0) {
                $('#ads').text('No ads in the library.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Description</th>',
                        '<th>Publisher</th>',
                        '<th>Date Published</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>')
                    );
                for (let ad of ads) {
                    let links = [];
                    let readMoreLink = $('<a href="#">[Read More]</a>')
                        .click(displayAdvert.bind(this, ad));
                    links.push(readMoreLink);
                    links.push(' ');
                    if (ad._acl.creator === sessionStorage['userId']) {
                        let deleteLink = $('<a href="#">[Delete]</a>')
                            .click(deleteAd.bind(this, ad));
                        let editLink = $('<a href="#">[Edit]</a>')
                            .click(loadAdForEdit.bind(this, ad));
                        links.push(deleteLink);
                        links.push(' ');
                        links.push(editLink);
                    }
                    adsTable.append($('<tr>').append(
                        $('<td>').text(ad.title),
                        $('<td>').text(ad.description),
                        $('<td>').text(ad.publisher),
                        $('<td>').text(ad.datePublished),
                        $('<td>').text(ad.price),
                        $('<td>').append(links)
                    ));
                }
                $('#ads').append(adsTable);
            }
        }
    }

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function createAd() {
        let title = $('#formCreateAd input[name=title]').val();
        let description = $('#formCreateAd textarea[name=description]').val();
        let price = $('#formCreateAd input[name=price]').val();
        let imageUrl = $('#formCreateAd input[name=imageUrl]').val();
        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }
        if (Number.isNaN(price)) {
            showError('Price cannot be empty');
            return;
        }

        const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/posts";
        let adData = {
            title,
            description,
            publisher: sessionStorage.getItem('username'),
            datePublished: getCurrentDate(),
            price: Number(price).toFixed(2),
            imageUrl
        };

        $.ajax({
            method: "POST",
            url: kinveyAdsUrl,
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: createAdSuccess,
            error: handleAjaxError
        });

        function createAdSuccess(response) {
            listAds();
            showInfo('Book created.');
        }
    }

    function deleteAd(ad) {
        const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/posts/" + ad._id;
        $.ajax({
            method: "DELETE",
            url: kinveyAdUrl,
            headers: getKinveyUserAuthHeaders(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });

        function deleteAdSuccess(response) {
            listAds();
            showInfo('Ad deleted.');
        }
    }

    function displayAdvert(ad) {
        $('#viewDetailsAd').empty();

        let advertInfo = $('<div>').append(
            $('<br>'),
            $('<div>').append($('<img>').attr('src', ad.imageUrl)),
            $('<label>').text('Title:'),
            $('<h1>').text(ad.title),
            $('<label>').text('Description:'),
            $('<p>').text(ad.description),
            $('<label>').text('Publisher:'),
            $('<div>').text(ad.publisher),
            $('<label>').text('Date:'),
            $('<div>').text(ad.datePublished)
        );

        $('#viewDetailsAd').append(advertInfo);
        showView('viewDetailsAd');
    }

    function loadAdForEdit(ad) {
        const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/posts/" + ad._id;
        $.ajax({
            method: "GET",
            url: kinveyAdUrl,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });

        function loadAdForEditSuccess(ad) {
            console.log(ad);
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=price]').val(ad.price);
            $('#formEditAd input[name=imageUrl]').val(ad.imageUrl);
            showView('viewEditAd');
        }
    }

    function editAd() {
        let title = $('#formEditAd input[name=title]').val();
        let publisher = $('#formEditAd input[name=publisher]').val();
        let description = $('#formEditAd textarea[name=description]').val();
        let price = $('#formEditAd input[name=price]').val();
        let imageUrl = $('#formEditAd input[name=imageUrl]').val();
        if (title.length === 0) {
            showError('Title cannot be empty');
            return;
        }
        if (Number.isNaN(price)) {
            showError('Price cannot be empty');
            return;
        }

        const kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey +
            "/posts/" + $('#formEditAd input[name=id]').val();
        let adData = {
            title,
            publisher,
            description,
            datePublished: getCurrentDate(),
            price: Number(price).toFixed(2),
            imageUrl
        };
        $.ajax({
            method: "PUT",
            url: kinveyAdUrl,
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });

        function editAdSuccess(response) {
            listAds();
            showInfo('Book edited.');
        }
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.');
    }

    function getCurrentDate() {
        let today = new Date();
        let dd = ('0' + today.getDate()).slice(-2);
        let mm = ('00' + (today.getMonth() + 1)).slice(-2);
        let yy = today.getFullYear();
        return yy + '-' + mm + '-' + dd;
    }
}
