var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");
var question = document.getElementById("question");
var progression = document.getElementById("progression");


reponse.addEventListener('keydown',function(e){
    if(e.key==="Enter") {boutonValider.onclick()} //pour que la touche entrée valide la saisie

});

//question.textContent="Les ... et les angiospermes constituent  les spermatophytes";

var questRep = [
{
    quest:"Les ... et les angiospermes constituent  les spermatophytes",
    rep:"gymnospermes"
},
{
    quest:"Les angiospermes sont caractérisés par des fruits et des ...",
    rep: "fleurs"
},
{
    quest:"Après la fécondation, les ... deviennent des fruits et le ... la paroi du fruit ",
    rep: "ovules carpelle"
},
{
    quest:"Le calice et la corolle forme le ... , ce sont les parties stériles de la plante",
    rep: "périanthe"
}
]

var n=0;

//progression.textContent="Question "+ n + "sur 4";
question.textContent=questRep[n].quest;
function questionSuivante () {
    //if(n<(questRep.lenght-1))
    n+=1;
    question.textContent=questRep[n].quest;

}

boutonValider.onclick=function(){
    if (reponse.value.toLowerCase() === questRep[n].rep){ //pour gérer les problèmes de majuscule on transforme tout en minuscule avant le test
        reponse.value="BRAVO !";
        setTimeout (questionSuivante, 1000);//on appelle la question suivante si la réponse est juste
    }
    else {
        reponse.value = "Erreur :(";
    }
    setTimeout (function(){reponse.value=""}, 1000); //au bout de 2 secondes on remet la zone de saisi vierge
}

//rogress=function() {
 //   this.elementShown("progress", "Question " + n + " sur 4");
//}

