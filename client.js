function hasUserMedia() {
    "use strict";
   //check if the browser supports the WebRTC 
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia);
}

if (hasUserMedia()) {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
        || navigator.mozGetUserMedia;
		
   //enabling video and audio channels 
    navigator.getUserMedia({ video: true, audio: true }, function (stream) {
        "use strict";
        var video = document.querySelector('video');
		video.srcObject = stream;
      //inserting our stream to the video tag     
    }, function (err) {"use strict"; });
} else {
    console.log("WebRTC is not supported");
}