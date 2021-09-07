var doRelocation = function() {
    var currentWidth = window.innerWidth,
        breakpointMin = 481,
        breakpointMax = 775,
        newLocationMin = window.location.href.replace(/MySatKit.*?html/, 'MySatKit/mobile/mobile.html'),
        newLocationMax = window.location.href.replace(/MySatKit.*?html/, 'MySatKit/landscape/landscape.html');

    if (currentWidth < breakpointMin) {
        window.location.replace(newLocationMin);
    }else if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }

}

doRelocation();

window.addEventListener('resize', doRelocation);
