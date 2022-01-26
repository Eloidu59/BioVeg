var reponse = document.getElementById("reponse");
var boutonvalider = document.getElementById("boutonValider");

boutonvalider.onclick=function(){
    if (reponse.value==="eau"){
        reponse.value="BRAVO !";
    }
    else reponse.value = Erreur;
}