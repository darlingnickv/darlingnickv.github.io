var alphaArray = [a, b , c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaNumArray = [];

function shorten() {
    var randomNum = numArray[Math.floor(numArray.length * Math.random())];
    alphaNumArray.push(randomNum);
    var randomAlpha = alphaArray[Math.floor(alphaArray.length * Math.random()* 6)];
    alphaNumArray.push(randomAlpha);
    var shortUrl1 = alphaNumArray.toString();
    var shortUrl2 = shortUrl1.replace(",", "");
    $(window.querystring).setAttribute(shortened, shortUrl2);
    var finalShortUrl = $(window.querystring).attr(shortened);
    console.log(finalShortUrl);
    return finalShortUrl;
}
