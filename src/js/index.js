import 'bootstrap';
import simpleParallax from 'simple-parallax-js';

import '../scss/index.scss';
var containers = [];
var imageContainers = [];
var faceImages = [];
var lucidImages = [];
function preload() {
    for (var i = 0; i < 128; i++) {
      faceImages[i] = new Image();
      faceImages[i].src = "public/images/face/" + i + ".jpg";

      lucidImages[i] = new Image();
      lucidImages[i].src = "public/images/lucid/" + i + ".jpg";


      containers[i] = document.createElement("div");
      containers[i].className = "mt-5 col-lg-4 col-md-6 col-sm-12"
      containers[i].id = i;

      imageContainers[i] = document.createElement("div");
      imageContainers[i].className = "face"
      imageContainers[i].appendChild(faceImages[i]);
      imageContainers[i].appendChild(lucidImages[i]);
      imageContainers[i].id = i;

      containers[i].appendChild(imageContainers[i]);


      var title = document.createElement("h4");
      title.className = "text-center"
      title.innerHTML = "<b>Neuron " + (i+1) + "</b>";
      containers[i].appendChild(title);


      document.getElementById("content").appendChild(containers[i]);



      containers[i].onclick = function(e){
        var i = e.target.id * 1 ;
        
        var video = document.createElement('video');
        video.src = "public/videos/" + (i) + ".mp4";
        video.className = "video";
        video.autoplay = true;

        imageContainers[i].appendChild(video);
      };

    }
}

preload()