'use strict';

(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };
})();
'use strict';

var nav = {};

nav.e = document.getElementsByClassName('navigation')[0];
nav.panel = nav.e.getElementsByClassName('navspace')[0];
nav.state = 0;
nav.setState = function (state) {
    nav.state = state;
    if (state === 1) {
        nav.panel.className = "navspace showNav";
    } else {
        nav.panel.className = "navspace";
    }
};
nav.start = nav.e.addEventListener('click', function (e) {
    e.preventDefault();
    var t = e.target || e.srcElement;
    if (nav.state === 0 && t.className === "navToggle") {
        //if the nav is closed and the user clicked on the navToggle button then open
        nav.setState(1);
    } else {
        nav.setState(0);
    }

    if (t.className === "link") {
        var href = t.href;
        href = href.split('#')[1];
        $('html,body').animate({
            scrollTop: $('#' + href).offset().top - 60
        }, 500);
    }

    if (t.className === 'logotype') {
        $('html,body').animate({
            scrollTop: $('#Welcome').offset().top - 60
        }, 500);
    }
});

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}