let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {

    if (username.value.trim() === "") {
        username.style.border = "2px solid red";
    } else {
        username.style.border = "3px solid green";
    }

    if (password.value.trim() === "") {
        password.style.border = "2px solid red";
    } else {
        password.style.border = "3px solid green";
    }

    if (
        username.value.trim() !== "" &&
        password.value.trim() !== ""
    ) {
        alert("Login Successful");
    }

});



username.addEventListener("input", function () {

    if (username.value.trim() === "") {
        username.style.border = "2px solid red";
    } else {
        username.style.border = "3px solid green";
    }

});

password.addEventListener("input", function () {

    if (password.value.trim() === "") {
        password.style.border = "2px solid red";
    } else {
        password.style.border = "3px solid green";
    }

});


