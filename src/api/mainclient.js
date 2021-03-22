
var baseUrl = "https://api.github.com";

export const getUrl = (entities = [], parameters = {}) => {
    var url = "";
    entities.forEach(entity => {
        url += '/' + entity;
    });

    var first = true;

    for (var key in parameters) {
        if (first) {
            url += '?';
            first = false;
        }
        else {
            url += '&';
        }
        url += key + '=' + parameters[key];
    }


    return (baseUrl + url);
}