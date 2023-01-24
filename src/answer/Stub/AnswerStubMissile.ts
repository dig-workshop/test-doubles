import {AnswerMissile} from "./AnswerTypes";

export class AnswerStubTrueMissile implements AnswerMissile {
    passwordCheck(): string {
        return "正しいパスワードです"
    }
}

export class AnswerStubFalseMissile implements AnswerMissile {
    passwordCheck(): string {
        return "不正なパスワードです"
    }
}