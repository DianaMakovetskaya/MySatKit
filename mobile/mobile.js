var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpointMax = 480,
        newLocationMax = window.location.href.replace(/MySatKit.*?html/, 'MySatKit/portrait/portrait.html');

    if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }
}

doRelocation();

window.addEventListener('resize', doRelocation);
