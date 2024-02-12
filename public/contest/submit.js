let artWork = document.querySelector("#UploadArtwork");

artWork.addEventListener("change", (event)=>{
    const input = event.target;
    let image = document.getElementById('preview');
    if(input.files && input.files[0]){
        var reader = new FileReader();
        reader.onload = function(e){
            image.src = e.target.result;
            image.style.width = "180px";
            image.style.height ="180px";
        }
        reader.readAsDataURL(input.files[0]);
    }
})

let image = document.getElementById('preview');

image.addEventListener("click",()=>{
   artWork.click();
})
