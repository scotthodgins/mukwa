const nav = {};

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
}
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
        let href = t.href;
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