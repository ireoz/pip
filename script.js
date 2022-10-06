const pipButton = document.getElementById('pip'); // 
const videoElement = document.getElementById('video');




// Prompt to select media stream, pass to video element then play on pip
async function selectMediaStream() {
    try {
        videoElement.srcObject = await navigator.mediaDevices.getDisplayMedia();
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
        console.log('whoops error here: ' + error);
    }
}

pipButton.addEventListener('click', async () =>{
    try {
        // disable button
        pipButton.disabled = true;
        // start picture in picture
        await videoElement.requestPictureInPicture();
        // reset button
        pipButton.disabled = false;
      } catch (error) {
        console.log('Oh no!, we got an error: ' + error);
    }
})

selectMediaStream();