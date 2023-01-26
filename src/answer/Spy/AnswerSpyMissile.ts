import {AnswerMissile} from "./AnswerTypes";


export class AnswerSpyMissile implements AnswerMissile {
    passwordCheck_isCalled = false
    passwordCheck_returnValue = ""
    fire_isCalled = false
    selfDestruction_isCalled = false

    passwordCheck(): string {
        this.passwordCheck_isCalled = true
        return this.passwordCheck_returnValue
    }

    fire(): string {
        this.fire_isCalled = true
        return 'ミサイルを発射しました'
    }

    selfDestruction(): string {
        this.selfDestruction_isCalled = true
        return '自爆しました'
    }
}