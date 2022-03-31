const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the usuer to select a media stream, pass that to video element , then play.
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch errors here
        console.log('Whoops, error here', error)
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture-i-picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

//  On load
selectMediaStream();
