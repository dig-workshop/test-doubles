import {Missile} from "../../LaunchMissile";

export class AnswerStubTrueMissile implements Missile {
    fire(): boolean {
        return true
    }
}

export class AnswerStubFalseMissile implements Missile {
    fire(): boolean {
        return false
    }
}