describe("test validation password", () => {
    var passwordValidator:validator.PasswordValidator;
    beforeEach(() => {
        passwordValidator = new validator.PasswordValidator();
    });

    it("null should return all false", ()=>{
        var validateResult:Array<{content:string, valid:boolean}> = passwordValidator.validate(null);
        expect(validateResult.length).toBe(6);
    })
});