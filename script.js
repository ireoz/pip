const pipButton = document.getElementById('pip');
const videoElement = document.getElementById('video');


// pipButton.addEventListener('click', ())


async function callCaptureStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();

        if ('pictureInPictureEnabled' in document) {
            pipButton.classList.remove('hidden')
            pipButton.disabled = false;
          
            pipButton.addEventListener('click', () => {
              videoElement.requestPictureInPicture();
            });
          }
        
    } catch (error) {
        console.log(error);
    }
}

pipButton.addEventListener('click', () => {
    if (document.pictureInPictureElement) {
      document
        .exitPictureInPicture()
        .catch(error => {
        console.log(error);
      })
    }
  });

// callCaptureStream();