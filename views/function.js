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
let dropped = true
document.getElementById("dropCtn").style.display="none"

document.getElementById("dropBtn").addEventListener('click',()=>{
    console.log("j'ai cliqué sur le boutoooooon")
    if(dropped){
        document.getElementById("dropCtn").style.display="block"
        dropped = false
    }
    else{
        document.getElementById("dropCtn").style.display="none"
        dropped = true
    }
})