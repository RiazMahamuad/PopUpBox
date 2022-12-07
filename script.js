    
    var  fileUpload=document.querySelector("#file-upload");
    var ImageCointener=document.querySelector("#images");
    var NumberOfFileCount=document.querySelector("#num-of-file");
     
    var btn=document.querySelector(".card");
    var PopUpBox=document.querySelector(".popUpBox");
    var span = document.getElementsByClassName("close")[0];
 
function img()  //usear how many iter select
{   
    ImageCointener.innerHTML= "";
    NumberOfFileCount.textContent= `${fileUpload.files.length} 
    Files Selected`;

}
// When the user clicks the button, open the modal 
function clickMe(){
    PopUpBox.style.display="block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    PopUpBox.style.display = "none";
  }

 