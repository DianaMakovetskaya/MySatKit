
const doRelocation = function() {
    const currentWidth = window.innerWidth,
        breakpoint = 1300,
        newLocation = window.location.href.replace(/MySatKit.*?html/, 'MySatKit/landscape/landscape.html');

    if (currentWidth <= breakpoint) {
        window.location.replace(newLocation)
    }

}

doRelocation();

window.addEventListener('resize', doRelocation);
