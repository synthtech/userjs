// ==UserScript==
// @name         Moca News Image Viewer
// @namespace    https://github.com/synthtech
// @description  Fixes mouse events in the image viewer
// @version      1.0
// @author       synthtech
// @match        *://moca-news.net/article/*
// @grant        none
// ==/UserScript==

(() => {
    let img = document.getElementById('image_cvs');
    if (img) {
        img.removeAttribute('onclick');
        img.removeAttribute('oncontextmenu');
        img.removeAttribute('onselectstart');
        img.removeAttribute('onmousedown');
        img.removeAttribute('onmouseover');
    }
    let dummy = document.getElementById('image_cvs_cover');
    if (dummy) dummy.remove();
})();
