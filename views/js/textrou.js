var reponse = document.getElementById("reponse");
var boutonvalider = document.getElementById("boutonValider");

boutonvalider.onclick=function(){
    if (reponse.value.toLowerCase() ==="eau"){ //pour gérer les problèmes de majuscule on transforme tout en minuscule avant le test
        reponse.value="BRAVO !";
    }
    else {
        reponse.value = "Erreur";
    }
    setTimeout (function(){reponse.value=""}, 1000); //au bout de 2 secondes on remet la zone de saisi vierge
}

reponse.addEventListener('keydown',function(e){
    if(e.key==="Enter") {boutonValider.onclick()} //pour que la touche entrée valide la saisie

});

