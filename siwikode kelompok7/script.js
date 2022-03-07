function login(){
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if(uname.value=="siwikode07" && pass.value=="123456"){
        alert("Selamat Datang !!");
        window.location = "admin.html";
    }else{
        alert("Username atau Password Salah !!");
    }
}

$(document).ready(function(){
    $(".bg-loader").hide();
})