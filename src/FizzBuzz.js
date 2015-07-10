/*global console */

var FIZZBUZZ = (function () {
    "use strict";

    var tellMe = function (number) {
        var result = number;

        if (number % 3 === 0) { result = "FIZZ"; }
        if (number % 5 === 0) { result = "BUZZ"; }
        if (number % 5 === 0 && number % 3 === 0) { result = "FIZZBUZZ"; }
        if (number === 0) { result = 0; }

        return result;
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
