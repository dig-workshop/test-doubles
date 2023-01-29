import {AnswerMissile} from "./AnswerTypes";

export class AnswerStubTrueMissile implements AnswerMissile {
    fire(): string {
        return "ミサイルを発射しました"
    }
}

export class AnswerStubFalseMissile implements AnswerMissile {
    fire(): string {
        return "ミサイルを発射できません"
    }
}