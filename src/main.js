/**
 * For creating a player inline you can use the MTVNPlayer.Player constructor.
 * For creating multiple players defined in HTML see MTVNPlayer.createPlayers
 * @static
 */
var MTVNPlayer = window.MTVNPlayer || {};
if (!MTVNPlayer.Player) {
    //= ../dist/version.js
    (function() {
        /* global Zepto*/
        //= ../components/underscore/underscore.js
        MTVNPlayer.provide("_",this._); // underscore is put on this, a temporary scope.
        // Zepto will define $ if it's not defined in global.
        //= ../components/zepto/zepto.js
        MTVNPlayer.provide("$",Zepto); // Zepto is a var.
    }).apply({});
    //= <%= modules %>
    // we can 'use strict' below, no more third-party stuff.
    /* jshint unused: false */
    (function(MTVNPlayer, $, _, BTG) {
        "use strict";
        var require = MTVNPlayer.require,
            provide = MTVNPlayer.provide,
            Exports = {}; // used for testing.
        //= <%= project %>
    })(MTVNPlayer, MTVNPlayer.require("$"), MTVNPlayer.require("_"), window.BTG);
}