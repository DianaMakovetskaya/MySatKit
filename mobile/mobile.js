var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpointMax = 375,
        newLocationMax = 'portrait.html';

    if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }
}

doRelocation();

window.addEventListener('resize', doRelocation);
