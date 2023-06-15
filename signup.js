let validationSuccess;
function signup(event) {
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const cpassword = $("#cpassword").val();
    const mobile = $("#mobile").val();
    const dob = $("#dob").val();
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
        $("#emailerr").text("Enter valid email");
    }
    else {
        $("#emailerr").text("");
    }
    if (password === "") {
        validationSuccess = false;
        $("#passworderr").text("Entr the password");
    }
    else {
        $("#passworderr").text("");
    }
    if (cpassword === "") {
        validationSuccess = false;
        $("#cpassworderr").text("Enter the cpassword");
    }
    else if (password !== cpassword) {
        validationSuccess = false;
        $("#cpassworderr").text("Enter the valid password");
    }
    else {
        $("#cpassworderr").text("");
    }
    if (mobile === "") {
        validationSuccess = false;
        $("#mobileerr").text("Enter the mobile number");
    }
    else if (mobile.length !== 10) {
        validationSuccess = false;
        $("#mobileerr").text("Enter the valid number");
    }
    else {
        $("#mobileerr").text("");
    }
    if (dob === "") {
        validationSuccess = false;
        $("#doberr").text("Enter the date of birth");
    }
    else {
        $("#doberr").text("");
    }
    let signupForm = {
        "name": name,
        "email": email, 
        "password": password,
        "cpassword": password,
        "mobile": mobile,
        "dob": dob
    }
    console.log(signupForm);
}

function call() {
    if (validationSuccess) {
        window.location.href = "signin.html";
    }

}
function home() {
    window.location.href = "signin.html";
}
function student() {
    window.location.href = "student.html";
}
function studenttbl() {
    window.location.href = "studenttbl.html";
}
