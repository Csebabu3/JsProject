let validationSuccess;
function signin(event) {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    validationSuccess = true;
    if (username === "") {
        validationSuccess = false;
        $("#usernameerr").text("Enter the username");
    }
    else {
        $("#usernameerr").text("");
    }
    if (password === "") {
        validationSuccess = false;
        $("#passworderr").text("Enter the password");
    }
    else if (password.length !== 8) {
        validationSuccess = false;
        $("#passworderr").text("Enter minimum 8 char");
    }
    else {
        $("#passworderr").text("");
    }


    let signinform = {
        "username": username,
        "password": password
    };
    console.log(signinform);
}
function redirect() {
    window.location.href = "signup.html";
}
function home() {
    window.location.href = "signin.html";
}
function student() {
    window.location.href = "student.html"
}
function studenttbl() {
    window.location.href = "studenttbl.html";
}
function contact() {
    window.location.href = "contact.html";
}
function signinform() {
    if (validationSuccess) {
        window.location.href = "home1.html";
    }
}




