function validate() {
    var firstName = document.getElementById("firstname").ariaValueMax;
    var lastName = document.getElementById("lastname").ariaValueMax;
    var formEmail = document.getElementById("email").ariaValueMax;
    var formPassword = document.getElementById("password").ariaValueMax;
    if (firstName == null || firstName == " ",lastName == null || lastName == "",formEmail == null || formEmail == "",formPassword == null || formPassword == ""){
        document.getElementById("fnlabel").style.visibility="visible";
        document.getElementById("fnimg").style.visibility="visible";
        document.getElementById("lnlabel").style.visibility="visible";
        document.getElementById("lnimg").style.visibility="visible";
        document.getElementById("emaillabel").style.visibility="visible";
        document.getElementById("emailimg").style.visibility="visible";
        document.getElementById("passlabel").style.visibility="visible";
        document.getElementById("passimg").style.visibility="visible";

        
    } else{
        return false;
    }
}