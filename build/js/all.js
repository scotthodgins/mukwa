'use strict';

var nav = {
    toggleButton: {
        element: document.getElementsByClassName('navToggle')[0],
        active: false
    },
    linkPanel: {
        element: document.getElementsByClassName('navspace')[0],
        height: nav.linkPanel.element.offsetHeight,
        y: getOffset(nav.linkPanel.element)
    },
    titleBar: {
        element: document.getElementsByClassName('logospace')[0],
        height: nav.titleBar.element.offsetHeight
    }
};

console.log(nav);