import {Password} from "./Types";

export class ValidPassword implements Password {
    isValid = true
    // ここにコードを記述して下さい

}

export class InvalidPassword implements Password {
    isValid = false
}