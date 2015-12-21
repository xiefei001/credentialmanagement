var LeastEightChar = (function () {
    function LeastEightChar() {
        this.content = "At least 8 characters long.";
    }
    LeastEightChar.prototype.isValid = function (str) {
        return str.length > 8;
    };
    return LeastEightChar;
})();
var ContainsUpperChar = (function () {
    function ContainsUpperChar() {
        this.content = "Contains uppercase letters.";
    }
    ContainsUpperChar.prototype.isValid = function (str) {
        return (/[A-Z]/.test(str));
        ;
    };
    return ContainsUpperChar;
})();
var ContainsLowerChar = (function () {
    function ContainsLowerChar() {
        this.content = "Contains lowercase letters.";
    }
    ContainsLowerChar.prototype.isValid = function (str) {
        return (/[a-z]/.test(str));
        ;
    };
    return ContainsLowerChar;
})();
//# sourceMappingURL=validator.js.map