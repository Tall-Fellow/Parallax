var headerText = document.getElementById("headerTopText");
var windowInnerHeight = window.innerHeight;

window.addEventListener('scroll', function() {
    var offsetWindow = window.pageYOffset;
    var elementOffset = headerText.offsetTop;
    var distance = (elementOffset - offsetWindow);

    if(distance < 60) {
        headerText.classList.add("headerTextFloating");
    }

    if(offsetWindow === 0) {
        headerText.classList.remove("headerTextFloating");
    }

    if(offsetWindow >= (windowInnerHeight - (headerText.offsetHeight + 120))) {
        headerText.classList.remove("headerTextFloating");
        headerText.classList.add("headerTextStatic");
    }

    if(offsetWindow < (windowInnerHeight - (headerText.offsetHeight + 120)) && headerText.classList.contains("headerTextStatic")) {
        headerText.classList.remove("headerTextStatic");
        headerText.classList.add("headerTextFloating");
    }
});