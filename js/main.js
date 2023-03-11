function check(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var userError = document.getElementById("userError");
    var passError = document.getElementById("passError");

    if(username.value.length < 11){
        username.style.borderColor = "red";
        userError.style.display = "block";
        return false;
    }

    else if(password.value.length < 8){
        username.style.borderColor = "#ccc";
        userError.style.display = "none";
        password.style.borderColor = "red";
        passError.style.display = "block";
        return false;
    }

    else{
        password.style.borderColor = "#ccc";
        passError.style.display = "none";
        username.value = "";
        password.value = "";
        return true;
    }

    
}

function check2(){
    var firstn = document.getElementById("firstn");
    var surn = document.getElementById("surn");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    var errorn = document.getElementById("errorn")
    var text = "";

    if(firstn.value.length < 3 || firstn.value == ""){
        firstn.style.borderColor = "red";
        // text = "Type Valid Name"
        // errorn.innerHTML = text;
        return false
    }

    else if(surn.value.length < 3 || surn.value == ""){
        firstn.style.borderColor = "#ccc";
        surn.style.borderColor = "red";
        // text = "Type Valid Name"
        // errorn.innerHTML = text;
        return false
    }

    else if(email.value.length < 3 || email.value == "" || email.value.indexOf("@") == -1){
        firstn.style.borderColor = "#ccc";
        email.style.borderColor = "red";
        // text = "Type Valid Name"
        // errorn.innerHTML = text;
        return false
    }

    else if(pass.value.length < 10 ){
        email.style.borderColor = "#ccc";
        pass.style.borderColor = "red";
        // text = "Type Valid Name"
        // errorn.innerHTML = text;
        return false
    }

    else{
        return true;
    }
}