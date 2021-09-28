function Webhook(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://5d1b-45-147-228-103.ngrok.io/api/WebhookFinder?url=" + url, false);
    xmlHttp.send(null);

    var result = xmlHttp.responseText;
    result = result.replace(/\"/g, '')
    result = result.replace(/\\n/g, '\n')
    result = result.replace(/\\r/g, '\r')

    return result;
}
