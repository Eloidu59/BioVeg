const chapitre = document.getElementsByClassName("themes");

const socket = io();

//Pour faire afficher la navigation en dynamique

socket.emit("chapitres")
/*socket.on("retourchapitres",(chap)=>{
console.log(chap[0].nom)
  /*const chapitre = document.getElementsByClassName("themes"); 
  //pour coller ca dans les div ou le class est "themes"?
  for(var i=0;i<=chap.lenght;i++){
    var chapNom=chap[i].nom;
    chapitre.innerHTML += "<a id='chap'"+i+">"+chapNom + "</a>";
  }

  const exercice=cdocument.getElementsByClassName("themes");
  for(var i=0;i<=chap.lenght;i++){
    var chapNom=chap[i].nom;
    var lien="/"+chapNom;
    chapitre.innerHTML += "<a href='"+lien+"'id='chap'"+i+">"+chapNom + "</a>";
  } 

});
*/
var mini=true;
document.getElementById("sidebar").style.width = "30px";
document.getElementById("main").style.marginLeft = "85px";
function toggleSidebar() {
  if (mini) {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    document.getElementById("sidebar").style.width = "30px";
    document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}

//Angiospermes
document.getElementById("dropAngioCtn").style.display="none"
document.getElementById("dropAngio").addEventListener('mouseover',()=>{
  document.getElementById("dropAngioCtn").style.display="block"
})
document.getElementById("dropAngio").addEventListener('mouseleave',()=>{
  document.getElementById("dropAngioCtn").style.display="none"
});


//GymnoSpermes
document.getElementById("dropGymnoCtn").style.display="none"
document.getElementById("dropGymno").addEventListener('mouseover',()=>{
  document.getElementById("dropGymnoCtn").style.display="block"
})
document.getElementById("dropGymno").addEventListener('mouseleave',()=>{
  document.getElementById("dropGymnoCtn").style.display="none"
});


//Fougeres
document.getElementById("dropFougCtn").style.display="none"
document.getElementById("dropFoug").addEventListener('mouseover',()=>{
  document.getElementById("dropFougCtn").style.display="block"
})
document.getElementById("dropFoug").addEventListener('mouseleave',()=>{
  document.getElementById("dropFougCtn").style.display="none"
});


