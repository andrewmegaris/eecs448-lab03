function validate(){


var password              = document.getElementById("password_input");
var password_confirmation = document.getElementById("password_confirmation_input");
var alert_message = "\n Please Try again."
alert(password + "  " + password_confirmation);
if(password != password_confirmation)
    {
        alert_message = "Password and Password Confirmation do not match." + alert_message;
        alert(alert_message + password);
    }
else if( password.length < 8)
    {
        alert_message = "Password is less than the required 8 characters." + alert_message;
        alert(alert_message);
    }
else
    {
        alert("Successful Sign In");
    }
    

}
/*
Display and informative error message if any of the following occur:
the passwords entered don't match
the passwords are not at least 8 characters long

*/