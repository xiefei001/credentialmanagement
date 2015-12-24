'use strict';

class PasswordController {
    static  $inject = ["$location"];
    private failedCount:number;
    private validatedResult:Array<{content:string, valid:boolean}>;
    private pwd:string;
    private passwordValidator:validator.PasswordValidator  = new validator.PasswordValidator();

    constructor(private location:ng.ILocationService) {
        this.validate();
    }

    validate():void {
        this.validatedResult = this.passwordValidator.validate(this.pwd);
        this.failedCount = 0;
        this.validatedResult.forEach(singleResult => {
            if (!singleResult.valid) {
                this.failedCount++;
            }
        });
    }

    gotoView() {
        this.location.path("/pwdview");
    }

    resetPwd():void {
        this.pwd = null;
        this.validate();
        this.location.path("/");
    }
}
angular.module("app").controller("passwordController", PasswordController);