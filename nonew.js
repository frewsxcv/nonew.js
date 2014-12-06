module.exports = (function () {
    "use strict";

    /**
     * Allows constructors to be called without using `new`
     */
    var nonew = function (Constructor) {
        return function () {
            var instance = Object.create(Constructor.prototype);
            Constructor.apply(instance, arguments);
            return instance;
        };
    };

    return nonew;
}());
