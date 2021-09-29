function Webhook(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://deluxe-api.servehttp.com:8000/api/WebhookFinder?url=" + url, false);
    xmlHttp.send(null);

    var result = xmlHttp.responseText;
    result = result.replace(/\"/g, '')
    result = result.replace(/\\n/g, '\n')
    result = result.replace(/\\r/g, '\r')

    return result;
}
