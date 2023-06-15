let validationSuccess;
let Data = {};

function student(event) {
  event.preventDefault();
  //retriving
  const id = $("#id").val();
  const name = $("#name").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const cpassword = $("#cpassword").val();
  const mobile = $("#mobile").val();
  const dob = $("#dob").val();
  const qualification = $("#qualification").val();
  const gender = $("#Gender").val();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  validationSuccess = true;

  if (name === "") {
    validationSuccess = false;
    $("#nameerr").text("Enter the name");
  } else {
    $("#nameerr").text("");
  }

  if (email === "") {
    validationSuccess = false;
    $("#emailerr").text("Enter the email");
  } else if (!regex.test(email)) {
    validationSuccess = false;
    $("#emailerr").text("Enter a valid email");
  } else {
    $("#emailerr").text("");
  }

  if (password === "") {
    validationSuccess = false;
    $("#passworderr").text("Enter the password");
  } else {
    $("#passworderr").text("");
  }

  if (cpassword === "") {
    validationSuccess = false;
    $("#cpassworderr").text("Enter the cpassword");
  } else if (password !== cpassword) {
    validationSuccess = false;
    $("#cpassworderr").text("Enter a valid password");
  } else {
    $("#cpassworderr").text("");
  }

  if (mobile === "") {
    validationSuccess = false;
    $("#mobileerr").text("Enter the mobile number");
  } else if (mobile.length !== 10) {
    validationSuccess = false;
    $("#mobileerr").text("Enter a valid number");
  } else {
    $("#mobileerr").text("");
  }

  if (dob === "") {
    validationSuccess = false;
    $("#doberr").text("Enter the date of birth");
  } else {
    $("#doberr").text("");
  }

  if (qualification === "") {
    validationSuccess = false;
    $("#qualificationerr").text("Enter the qualification");
  } else {
    $("#qualificationerr").text("");
  }

  if (gender === "") {
    validationSuccess = false;
    $("#Gendererr").text("Enter the gender");
  } else {
    $("#Gendererr").text("");
  }

  if (validationSuccess) {
    const studentForm = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
      mobile: mobile,
      dob: dob,
      qualification: qualification,
      gender: gender
    };
    console.log(studentForm);
    if (validationSuccess === true) {
      debugger
      if (id == "") {
        $.ajax({
          type: "POST",
          url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm",
          dataType: "JSON",
          data: studentForm,
          success: function () {
            location.reload();
          },
        });

      }
      else {
        $.ajax({
          type: "PUT",
          url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm/" + Data.id,
          dataType: "JSON",
          data: studentForm,
          success: function (data) {
            console.log(data);
            window.location.href = "studenttbl.html";
            location.reload();
          },

        });
      }
    }
  }
}
function getData() {
  $.ajax({
    type: "GET",
    url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm",
    success: function (data) {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        const text = "<tr>" +
          "<td>" + data[i].name + "</td>" +
          "<td>" + data[i].email + "</td>" +
          "<td>" + data[i].password + "</td>" +
          "<td>" + data[i].cpassword + "</td>" +
          "<td>" + data[i].mobile + "</td>" +
          "<td>" + data[i].dob + "</td>" +
          "<td>" + data[i].qualification + "</td>" +
          "<td>" + data[i].gender + "</td>" +
          "<td>" + "<button type='button' class='btn btn-warning btn-sm' onclick='editRow(" + data[i].id + ")'>Edit </button>" + "</td>" +
          "<td>" + "<button type='button' class='btn btn-danger btn-sm' onclick='deleteRow(" + data[i].id + ")'>Delete</button>" + "</td>" +
          "</tr>";
        $("#tableBody").append(text);

      }


    }

  });
}
// function editRow(id) {
//   $.ajax({
//     type: "GET",
//     url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm/" + id,
//     success: function (response) {
//       $('#id').val(response.id)
//       $("#name").val(response.name);
//       $("#email").val(response.email);
//       $("#password").val(response.password);
//       $("#cpassword").val(response.cpassword);
//       $("#mobile").val(response.mobile);
//       $("#dob").val(response.dob);
//       $("#qualification").val(response.qualification);
//       $("#gender").val(response.gender);
//       Data = response;
//       alert("edit row");


//     }
//   });
// }
function editRow(id) {
  $.ajax({
    type: "GET",
    url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm/" + id,
    success: function (response) {
      // Convert the row data to a JSON string
      const rowData = JSON.stringify(response);
      // Encode the row data to be URL-safe
      const encodedData = encodeURIComponent(rowData);
      // Redirect to the form page with the encoded row data as a parameter
      window.location.href = "student.html?data=" + encodedData;
    },
    error: function (xhr, status, error) {
      console.log("AJAX request failed: " + error);
    }
  });

}
$(document).ready(function () {
  // Get the encoded row data from the URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const encodedData = urlParams.get("data");
  // Decode the row data
  const decodedData = decodeURIComponent(encodedData);
  // Parse the JSON string back to an object
  const rowData = JSON.parse(decodedData);

  // Populate the form fields with the retrieved row data
  $("#id").val(rowData.id);
  $("#name").val(rowData.name);
  $("#email").val(rowData.email);
  $("#password").val(rowData.password);
  $("#cpassword").val(rowData.cpassword);
  $("#mobile").val(rowData.mobile);
  $("#dob").val(rowData.dob);
  $("#qualification").val(rowData.qualification);
  $("#gender").val(rowData.gender);
  Data = rowData;


});




function deleteRow(id) {
  $.ajax({
    type: "DELETE",
    url: "https://6465bc0c9c09d77a62f2717c.mockapi.io/studentForm/" + id,
    success: function () {
      alert('This row is deleted.');
      location.reload();
    }
  });
}


function home() {
  window.location.href = "signin.html";
}
function studenttbl() {
  window.location.href = "studenttbl.html";
}
function stutbl() {
  if (validationSuccess) {
    window.location.href = "studenttbl.html";

  }
}






