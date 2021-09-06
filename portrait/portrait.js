var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpointMin = 375,
        breakpointMax = 775,
        newLocationMin = 'mobile.html',
        newLocationMax = 'landscape.html';

    if (currentWidth <= breakpointMin) {
        window.location.replace(newLocationMin);
    }else if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }

}

doRelocation();

window.addEventListener('resize', doRelocation);
