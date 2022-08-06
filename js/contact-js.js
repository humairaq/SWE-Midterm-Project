document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.city = document.getElementById('city');
    fields.state = document.getElementById('state');
    fields.country = document.getElementById('country');
    fields.password = document.getElementById('password');
    fields.passwordCheck = document.getElementById('passwordCheck');
    fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}