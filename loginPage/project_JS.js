//this will send us a window alert when we submit the email and password
document.querySelector("#login-form").addEventListener('submit' , function(event){ 
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#pass").value;

    window.alert(`Email : ${email}`);
    window.alert(`PassWord : ${pass}`);
});