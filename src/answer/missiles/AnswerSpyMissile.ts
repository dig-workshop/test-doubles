import {Missile} from "../../LaunchMissile";

export class AnswerSpyMissile implements Missile {
    result: boolean = false
    fire_isCalled = false

    fire(): boolean {
        this.fire_isCalled = true

        return this.result
    }
}