import {AnswerMissile} from "./AnswerTypes";


export class AnswerSpyMissile implements AnswerMissile {
    passwordCheck_isCalled = false
    passwordCheck_returnValue = ""
    fire_isCalled = false
    fire_returnValue = ""
    selfDestruction_isCalled = false
    selfDestruction_returnValue = ""

    passwordCheck(): string {
        this.passwordCheck_isCalled = true
        return this.passwordCheck_returnValue
    }

    fire(): string {
        this.fire_isCalled = true
        return this.fire_returnValue
    }

    selfDestruction(): string {
        this.selfDestruction_isCalled = true
        return this.selfDestruction_returnValue
    }
}