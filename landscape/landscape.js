var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpointMin = 775,
        breakpointMax = 1024,
        newLocationMin = 'portrait.html',
        newLocationMax = 'web.html';

    if (currentWidth <= breakpointMin) {
        window.location.replace(newLocationMin);
    }else if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }
}

doRelocation();

window.addEventListener('resize', doRelocation);

