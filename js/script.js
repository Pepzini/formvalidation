function validateform() {
    if (document.myForm.fullName.value == '') {
        alert('Please enter your name');
        document.myForm.fullName.focus();
        return false;
    } if (document.myForm.email.value == '') {
        alert('Please enter your email');
        document.myForm.email.focus();
        return false;
    } if (document.myForm.password.length<6) {
        alert('password too short');
        document.myForm.password.focus();
        return false; 
    }
    else {
        return true;
    }
}