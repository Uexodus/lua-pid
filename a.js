var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://api.ipify.org/", false ); // false for synchronous request
xmlHttp.send( null );
alert(xmlHttp.responseText)




