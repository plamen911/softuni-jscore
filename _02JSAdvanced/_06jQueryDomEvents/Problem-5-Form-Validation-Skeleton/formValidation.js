function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPassword = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyNumber = $('#companyNumber');
    let companyInfo = $('#companyInfo');
    let submitBtn = $('#submit');
    let validationDiv = $('#valid');
    let isAllValid = true;

    companyCheckbox.on('change', function () {
        if (companyCheckbox.is(':checked')) {
            companyInfo.css('display', 'block');
        } else {
            companyInfo.css('display', 'none');
        }
    });

    submitBtn.on('click', function (e) {
        e.preventDefault();
        validateForm();
        if (isAllValid) {
            validationDiv.css('display', 'block');
        } else {
            validationDiv.css('display', 'none');
        }
    });

    function validateForm() {
        validateInputWithRegExpr(username, /^[A-Za-z\d]{3,20}$/g)
        validateInputWithRegExpr(email, /^.*?@.*?\..*$/g);
        if (confirmPassword.val() === password.val()) {
            validateInputWithRegExpr(password, /^\w{5,15}$/g);
            validateInputWithRegExpr(confirmPassword, /^\w{5,15}$/g);
        } else {
            password.css('border', 'solid red');
            confirmPassword.css('border', 'solid red');
            isAllValid = false;
        }

        if (companyCheckbox.is(':checked')) {
            validateCompanyInfo();
        }
    }
    
    function validateCompanyInfo() {
        let numValue = +companyNumber.val();
        if (numValue >= 1000 && numValue <= 9999) {
            companyNumber.css('border', 'none');
        } else {
            companyNumber.css('border', 'solid red');
            isAllValid = false;
        }
    }
    
    function validateInputWithRegExpr(input, pattern) {
        if (pattern.test(input.val())) {
            input.css('border', 'none');
        } else {
            input.css('border', 'solid red');
            isAllValid = false;
        }
    }
}
