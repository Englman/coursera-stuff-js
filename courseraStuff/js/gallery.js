/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("Hovered on " + previewPic.src);
  
    console.log("Source of the Image:" + previewPic.src);
    console.log("Alt text:" + previewPic.alt);
  
    let imageContainer = document.getElementById("image");
    imageContainer.style.backgroundImage = `url("${previewPic.src}")`;
    imageContainer.innerHTML = previewPic.alt;
}

function unDo(){
     let imageContainer = document.getElementById("image");
    
      imageContainer.style.backgroundImage = "url()";
      imageContainer.innerHTML = "Okay";
}
