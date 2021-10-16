function Webhook(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("https://myaspnet.herokuapp.com/webhookfinder?url=" + url, false);
    xmlHttp.send(null);

    var result = xmlHttp.responseText;
    result = result.replace(/\"/g, '')
    result = result.replace(/\\n/g, '\n')
    result = result.replace(/\\r/g, '\r')

    return result;
}
