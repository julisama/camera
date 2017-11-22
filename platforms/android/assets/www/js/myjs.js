
document.getElementById('but').addEventListener("click", function(){
          init();
      });


function init(){


navigator.camera.getPicture(onSuccess, onFail, {quality: 58, destinationType: Camera.DestinationType.FILE_URI});

function onSuccess(imageURI){
    alert('Pic taken!');
    var image = document.getElementById('image');
    image.src = imageURI;
    alert(image.src);
    }

function onFail(message){
    alert('Failed because: '+message);
}

}

