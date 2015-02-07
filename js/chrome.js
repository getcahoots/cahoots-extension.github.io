/*
 * cahoots-website
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */
'use strict';

(function main () {
    var $installButton = document.getElementById('chrome-install');

    function install (e) {
        var webstore;

        e.preventDefault();

        if (chrome && chrome.webstore) {
            webstore = chrome.webstore;

            webstore.install();
        }
    }

    $installButton.addEventListener('click', install);
})();
