import 'bootstrap';
import simpleParallax from 'simple-parallax-js';

import '../scss/index.scss';
var faceImages = [];
var lucidImages = [];
function preload() {
    for (var i = 0; i < 128; i++) {
      faceImages[i] = new Image();
      faceImages[i].src = "/public/images/face/" + i + ".jpg";

      lucidImages[i] = new Image();
      lucidImages[i].src = "/public/images/lucid/" + i + ".jpg";

      var container = document.createElement("div");
      container.className = "mt-5 col-lg-4 col-md-6 col-sm-12"

      var imgContainer = document.createElement("div");
      imgContainer.className = "face"
      imgContainer.appendChild(faceImages[i]);
      imgContainer.appendChild(lucidImages[i]);

      container.appendChild(imgContainer);


      var title = document.createElement("h4");
      title.className = "text-center"
      title.innerHTML = "<b>Neuron " + i + "</b>";
      container.appendChild(title);


      document.getElementById("content").appendChild(container);



      faceImages[i].onmouseover = function(){
        console.log('hov')
      };

    }
}

preload()