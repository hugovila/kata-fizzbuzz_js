/*global console */

var FIZZBUZZ = (function () {
    "use strict";

    var tellMe = function (number) {
        var FIZZ = 3,
            BUZZ = 5;

        if (number === 0) { return 0; }
        if (number % FIZZ === 0 && number % BUZZ === 0) { return "FIZZBUZZ"; }
        if (number % FIZZ === 0) { return "FIZZ"; }
        if (number % BUZZ === 0) { return "BUZZ"; }

        return number;
    },

        solutionsOfThe = function (firstNumbers) {
            var number;
            for (number = 0; number <= firstNumbers; number += 1) {
                console.log(this.tellMe(number));
            }
        };

    return {
        tellMe: tellMe,
        solutionsOfThe: solutionsOfThe
    };
}());
