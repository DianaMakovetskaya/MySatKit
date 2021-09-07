const doRelocation = function() {
    const currentWidth = window.innerWidth,
        breakpointMin = 775,
        breakpointMax = 1300,
        newLocationMin = window.location.href.replace(/MySatKit.*?html/, 'MySatKit/portrait/portrait.html'),
        newLocationMax =  window.location.href.replace(/MySatKit.*?html/, 'MySatKit/web/web.html')

    if (currentWidth <= breakpointMin) {
        window.location.replace(newLocationMin);
    }else if(currentWidth > breakpointMax){
        window.location.replace(newLocationMax);
    }
}

doRelocation();

window.addEventListener('resize', doRelocation);

