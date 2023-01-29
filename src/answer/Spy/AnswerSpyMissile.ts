import {AnswerMissile} from "./AnswerTypes";


export class AnswerSpyMissile implements AnswerMissile {
    fire_isCalled = false
    // selfDestruction_isCalled = false

    fire() {
        this.fire_isCalled = true
    }

    // selfDestruction(): string {
    //     this.selfDestruction_isCalled = true
    //     return '自爆しました'
    // }
}