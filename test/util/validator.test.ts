import PasswordValidator = validator.PasswordValidator;
"use strict";
describe("Validators tests", () => {
    var pwdValidator:validator.PasswordValidator = new PasswordValidator();

    it("test mit null passwort", ()=> {
        var validateResult = pwdValidator.validate(null);
        expect(validateResult.length == 6);

    });
});