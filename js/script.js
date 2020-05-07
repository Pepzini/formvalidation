function validateform(params) {
    if (document.myForm.fullName.value == '') {
        alert('Name cannot be empty');
        document.myForm.name.focus();
    }
    if (document.myForm.email.value == '') {
        alert('Email cannot be empty');
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.password.value.length < 6) {
    alert('Password too short');
    document.myForm.password.focus();
    return false;
    } if (document.myForm.password.value != document.myForm.confirmPassword.value) {
    alert('Password do not match')
    } else {
    alert("Password Match: Welcome to GoGirl")
    return true;
}
}
