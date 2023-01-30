import {AnswerMissile} from "./AnswerTypes";


export class AnswerSpyMissile implements AnswerMissile {
    fire_isCalled = false
    selfDestruction_isCalled = false

    fire() {
        this.fire_isCalled = true
    }

    selfDestruction() {
        this.selfDestruction_isCalled = true
    }
}