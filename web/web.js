
var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpoint = 1024,
        newLocation = 'landscape/landscape.html';

    if (currentWidth <= breakpoint) {
        // window.location.replace(newLocation);
        window.location.replace(/MySatKit.*?html/, 'MySatKit/landscape/landscape.html')
    }

}

doRelocation();

window.addEventListener('resize', doRelocation);
