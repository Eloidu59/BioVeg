var mini=true;
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


//Annales
document.getElementById("dropAnCtn").style.display="none"
document.getElementById("dropAn").addEventListener('mouseover',()=>{
  document.getElementById("dropAnCtn").style.display="block"
})
document.getElementById("dropAn").addEventListener('mouseleave',()=>{
  document.getElementById("dropAnCtn").style.display="none"
});