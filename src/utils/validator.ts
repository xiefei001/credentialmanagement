namespace validator {
    interface Validator {
        content: string;
        isValid(str:string):boolean;
    }

    class NotEmptyChar implements Validator {
        content = "Enter at least one character";
        isValid(str:string):boolean {
            return str == null ? false : str.length > 0;
        }
    }

    class LeastEightChar implements Validator {
        content:string = "At least 8 characters long.";
        isValid(str:string) {
            return str == null ? false : str.length > 8;
        }
    }

    class ContainsUpperChar implements Validator {
        content:string = "Contains uppercase letters.";
        isValid(str:string) {
            return str == null ? false : /[A-Z]/.test(str);
        }
    }

    class ContainsLowerChar implements Validator {
        content:string = "Contains lowercase letters.";
        isValid(str:string) {
            return str == null ? false : /[a-z]/.test(str);
        }
    }

    class Punctuation implements Validator {
        content:string = "Contains punctuation.";
        isValid(str:string) {
            return str == null ? false : (/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/).test(str);
        }
    }

    class Numbers implements Validator {
        content:string = 'Contains numbers.';
        isValid(str:string) {
            return str == null ? false : /\d/.test(str);
        }
    }

    export class PasswordValidator {
        private validators:Array<Validator> = [];

        constructor() {
            this.validators.push(new NotEmptyChar());
            this.validators.push(new LeastEightChar());
            this.validators.push(new ContainsLowerChar());
            this.validators.push(new ContainsUpperChar());
            this.validators.push(new Numbers());
            this.validators.push(new Punctuation());
        }

        validate (str:string):Array<{content:string, valid:boolean}> {
            var result:Array<{content:string, valid:boolean}> = [];
            this.validators.forEach(validator => {
                result.push({content: validator.content, valid: validator.isValid(str)});
            });
            return result;
        }
    }


}