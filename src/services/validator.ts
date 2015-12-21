interface PasswordValidator {
    content: string;
    isValid(str:string):boolean;
}

class LeastEightChar implements PasswordValidator {
    content:string = "At least 8 characters long.";
    isValid(str:string) {
        return str.length > 8;
    }
}

class ContainsUpperChar implements PasswordValidator {
    content:string = "Contains uppercase letters.";
    isValid(str:string) {
        return (/[A-Z]/.test(str));;
    }
}

class ContainsLowerChar implements PasswordValidator {
    content:string = "Contains lowercase letters.";
    isValid(str:string) {
        return (/[a-z]/.test(str));;
    }
}

