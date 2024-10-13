let springSmallImageElement = document.getElementById("seasonSmallImage");
let springMediumImageElement = document.getElementById("seasonMediumImage");

function springBtnOne() {
    springSmallImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    springMediumImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
}

function summerBtnTwo() {
    let summerBtnElementOne = document.getElementById("summerBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    let summerBtnElementTwo = document.getElementById("summerBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

    springSmallImageElement.src = summerBtnElementOne;
    springMediumImageElement.src = summerBtnElementTwo;
}

function autumnBtnThree() {
    let autumnBtnElementOne = document.getElementById("autumnBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    let autumnBtnElementTwo = document.getElementById("autumnBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

    springSmallImageElement.src = autumnBtnElementOne;
    springMediumImageElement.src = autumnBtnElementTwo;
}

function winterBtnFour() {
    let winterBtnElementOne = document.getElementById("winterBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    let winterBtnElementTwo = document.getElementById("winterBtn").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

    springSmallImageElement.src = winterBtnElementOne;
    springMediumImageElement.src = winterBtnElementTwo;
}