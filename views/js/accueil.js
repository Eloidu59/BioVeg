var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

    
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var valid= document.getElementById("username").value.indexOf("@student.junia.com")//Voir s'il y a la bonne extension, si elle n'est pas la: valid==-1
 
    if ( username == "1@student.junia.com" && password == "1" && valid!=-1){
        //console.log("Vous etes connecté")
        window.location.href = "/";
    //return false;
    }else if(valid==-1){
        alert("Veuillez saisir une adresse de type @student.junia.com");
    }
    /*else{
        attempt --;// Decrementing by one.
        alert("Vos identifiants sont incorrectes. You have left "+attempt+" attempt");


        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }*/
}



