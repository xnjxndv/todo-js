
function loginusername(){
    var username=document.getElementById("username").value;
    if (username === ""){
        alert("enter a username");
        return false;
    }
    if (username === "admin"){
        return true;
    }
    else{
        alert("Enter valid username");
        return false;
    }

}
function loginpassword(){
    var password=document.getElementById("password").value;
    if (password === ""){
        alert("Enter a valid password");
        return false;
    }
    if (password === "12345"){
        return true;
    }
    else{
        alert("Enter Valid password")
        return false;
    }
}
function validate(){
    if (loginusername() && loginpassword()){
        return true;
    }
    else{
        return false;
    }
}