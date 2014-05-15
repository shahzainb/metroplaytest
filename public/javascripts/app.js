//TO-DO unit tests and JSDocs

/**
 * Initialising the app module.
 * @type {*}
 */
var metroApp = angular.module('MetroPlayTestApp', []);

/**
 * IE8 console fix
 */
if (!window.console) {
    console = {
        log: function () {

        }
    }
}