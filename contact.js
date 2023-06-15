let validationSuccess;
function contact(event) {
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const mobile = $("#mobile").val();
    const message = $("#message").val();
    RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validationSuccess = true;
    if (name === "") {
        validationSuccess = false;
        $("#nameerr").text("Enter the name");
    }
    else {
        $("#nameerr").text("");
    }
    if (email === "") {
        validationSuccess = false;
        $("#emailerr").text("Enter the email");
    }
    else if (!RegExp.test(email)) {
        validationSuccess = false;
        $("#emailerr").text("Enter the valid email");
    }
    else {
        $("#emailerr").text("");
    }
    if (mobile === "") {
        validationSuccess = false;
        $("#mobileerr").text("Enter the mobile no");
    }
    else if (mobile.length !== 10) {
        validationSuccess = false;
        $("#mobileerr").text("Enter the valid mobile number");
    }
    else {
        $("#mobileerr").text("");
    }
    if (message === "") {
        validationSuccess = false;
        $("#messageerr").text("Enter the message");
    }
    else {
        $("#messageerr").text("");
    }

}
function home() {
    window.location.href = "signin.html";
}
function stuform() {
    window.location.href = "student.html";
}
function stutbl() {
    window.location.href = "studenttbl.html";
}