import {Missile} from "../AnswerTypes";

export class AnswerStubTrueMissile implements Missile {
    passwordCheck(): boolean {
        return true
    }

    fire(): boolean {
        return true
    }

    selfDestruction(): void {
    }
}

export class AnswerStubFalseMissile implements Missile {
    passwordCheck(): boolean {
        return false
    }

    fire(): boolean {
        return true
    }

    selfDestruction(): void {
    }
}