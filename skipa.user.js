// ==UserScript==
// @name        Skipa
// namespace    https://github.com/yarooze/skipa.ls
// @version     0.0.1
// @description Skip some stuff
// @author      Yarooze
// icon         https://github.com/yarooze/skipa.ls/raw/main/Icon.png
// updateURL    https://github.com/yarooze/skipa.ls/raw/main/skipa.meta.js
// downloadURL  https://github.com/yarooze/skipa.ls/raw/main/skipa.user.js
// @match        https://www.youtube.com/*
// @grant       none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    console.log('Skip youtube ads started...');
    setInterval(
        function() {
            document.querySelectorAll('.ytp-ad-skip-button').forEach(function(button) {
                if (button) {
                    console.log('Skip youtube ads button found. Click!');
                    button.click();
                }
            });
            document.querySelectorAll('.ytp-ad-overlay-close-button').forEach(function(button) {
                if (button) {
                    console.log('Skip youtube ads overlay button found. Click!');
                    button.click();
                }
            });
    }, 1000);
    // <button class="ytp-ad-skip-button ytp-button">
    // <button class="ytp-ad-overlay-close-button">
})();
