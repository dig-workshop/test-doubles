import {AnswerMissile} from "./AnswerTypes";

export class AnswerStubMissile implements AnswerMissile {
    fire_returnValue = ""
    selfDestruction_returnValue = ""

    fire() {
        return this.fire_returnValue
    }


    selfDestruction() {
        return this.selfDestruction_returnValue
    }
}