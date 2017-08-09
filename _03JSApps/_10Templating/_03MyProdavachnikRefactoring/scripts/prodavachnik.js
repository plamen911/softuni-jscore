function startApp() {
    // Clear user auth information at startup
    // sessionStorage.clear();

    // load partials and templates
    let partialUserAndPasswdSource = $('#partialUserAndPasswd').html();
    Handlebars.registerPartial('userAndPasswd', partialUserAndPasswdSource);

    let viewHomeSource = $('#viewHome').html();
    let viewHomeTemplate = Handlebars.compile(viewHomeSource);
    let viewHomeHtml = viewHomeTemplate();

    let viewLoginSource = $('#viewLogin').html();
    let viewLoginTemplate = Handlebars.compile(viewLoginSource);
    let viewLoginHtml = viewLoginTemplate();

    let viewRegisterSource = $('#viewRegister').html();
    let viewRegisterTemplate = Handlebars.compile(viewRegisterSource);
    let viewRegisterHtml = viewRegisterTemplate();

    let viewAdsSource = $('#viewAds').html();
    let viewAdsTemplate = Handlebars.compile(viewAdsSource);

    let viewDetailsAdSource = $('#viewDetailsAd').html();
    let viewDetailsAdTemplate = Handlebars.compile(viewDetailsAdSource);

    let viewCreateAdSource = $('#viewCreateAd').html();
    let viewCreateAdTemplate = Handlebars.compile(viewCreateAdSource);
    let viewCreateAdHtml = viewCreateAdTemplate();

    let viewEditAdSource = $('#viewEditAd').html();
    let viewEditAdTemplate = Handlebars.compile(viewEditAdSource);

    let templates = {
        viewHome: viewHomeHtml,
        viewLogin: viewLoginHtml,
        viewRegister: viewRegisterHtml,
        viewAds: '',
        viewDetailsAd: '',
        viewCreateAd: viewCreateAdHtml,
        viewEditAd: ''
    };

    let adList = [];
    let container = $('main');

    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(e => {
        e.preventDefault();
        listAds();
    });
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    container.on('click', '#buttonLoginUser', loginUser);
    container.on('click', '#buttonRegisterUser', registerUser);
    container.on('click', '#buttonCreateAd', createAd);
    container.on('click', '#buttonEditAd', editAd);
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
        container.html(templates[viewName]);
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

    function showHomeView(e) {
        e.preventDefault();
        showView('viewHome');
    }

    function showLoginView(e) {
        e.preventDefault();
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function loginUser(e) {
        e.preventDefault();
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

    function showRegisterView(e) {
        e.preventDefault();
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
        adList.length = 0;

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
            let viewRegisterHtml = '';

            if (ads.length === 0) {
                viewRegisterHtml = viewAdsTemplate({hasAds: false, ads: null});
            } else {
                for (let ad of ads) {
                    ad.isCreator = ad._acl.creator === sessionStorage['userId'];
                    adList.push(ad);
                }
                viewRegisterHtml = viewAdsTemplate({hasAds: true, ads: adList});
            }
            templates['viewAds'] = viewRegisterHtml;
            showView('viewAds');
        }
    }

    container.on('click', 'a[id^="view-"]', e => {
        e.preventDefault();
        let index = $(e.target).attr('id').split('-')[1];
        displayAdvert(adList[index]);
    });

    container.on('click', 'a[id^="edit-"]', e => {
        e.preventDefault();
        let index = $(e.target).attr('id').split('-')[1];
        loadAdForEdit(adList[index]);
    });

    container.on('click', 'a[id^="delete-"]', e => {
        e.preventDefault();
        let index = $(e.target).attr('id').split('-')[1];
        deleteAd(adList[index]);
    });

    function getKinveyUserAuthHeaders() {
        return {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };
    }

    function showCreateAdView(e) {
        e.preventDefault();
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function createAd(e) {
        e.preventDefault();
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
        templates['viewDetailsAd'] = viewDetailsAdTemplate(ad);
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
            templates['viewEditAd'] = viewEditAdTemplate(ad);
            showView('viewEditAd');
        }
    }

    function editAd(e) {
        e.preventDefault();
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

    function logoutUser(e) {
        e.preventDefault();
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
