let validationSuccess;
function Employee(event){
    event.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const empid = $("#empid").val();
    const mobile = $("#mobile").val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validationSuccess = true;
    if(name === ""){
        validationSuccess = false;
        $("#nameerr").text("Enter the name");
    }
    else{
        $("#nameerr").text("");
    }
    if(email === ""){
        validationSuccess = false;
        $("#emailerr").text("Entr the email");
    }
    else if(!regex.test(email)){
        validationSuccess = false;
        $("#emailerr").text("Enter the valid email");
    }
    else{
        $("#emailerr").text("");
    }
    if(password === ""){
        validationSuccess = false;
        $("#passworderr").text("Enter the password");
    }
    else{
         $("#passworderr").text("");
    }
    if(empid === ""){
        validationSuccess = false;
        $("#empiderr").text("Enter the emp id");
    }
    else{
        $("#empiderr").text("");
    }
    if(mobile === ""){
        validationSuccess = false;
        $("#mobileerr").text("Enter the mobile no");
    }
    else if(mobile.length !== 10){
        validationSuccess = false;
        $("#mobileerr").text("Enter the valid mobile number");
    }
    else{
        $("#mobileerr").text("")
    }
}
