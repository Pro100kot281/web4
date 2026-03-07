
function upDate(previewPic) {
   
    console.log("Mouse hover detected!");
    console.log("Image source:", previewPic.src);
    console.log("Image alt text:", previewPic.alt);
    
   
    let imageDiv = document.getElementById("image");
    

    imageDiv.innerHTML = previewPic.alt;
    

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    let imageDiv = document.getElementById("image");
    

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML = "Hover over an image below to display here.";
    
    console.log("Undo function executed");
}