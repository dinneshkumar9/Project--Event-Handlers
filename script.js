// function to show when the email input is incorrect and show error message.
const email = document.getElementById("email");

email.addEventListener('change' ,function(event){
    const email = event.target.value;
    if(email.length < 3 || !email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerHTML = "Make sure email is more than 3 characters and has @ and a .";
        document.getElementById("emailError").style.color = "red";
    }
    else {
        document.getElementById("emailError").innerHTML = "";
    }
});

// function to show when the password input is incorrect and show error message.
const password = document.getElementById("password");

password.addEventListener("change", function(event){
    const password = event.target.value;
    if(password.length < 8){
        document.getElementById("passwordError").innerHTML = "Make sure password is more than 8 characters.";
        document.getElementById("passwordError").style.color = "red";
    }
    else {
        document.getElementById("passwordError").innerHTML = "";
    }
})

// Showing confirmation window and alert
const form = document.getElementById("btn");
        form.addEventListener("click", function(event) {
        event.preventDefault();
    if (confirm("Are you sure you want to sign up?")) {
      alert("Successful signup!");
    }
    else {
// Clear form values and error messages
        document.getElementById("myForm").reset();
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("passwordError").innerHTML = "";
    }
});

