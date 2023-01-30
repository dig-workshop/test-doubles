import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    password: string
    missile: AnswerMissile

    constructor(missile: AnswerMissile, password: string) {
        this.password = password
        this.missile = missile
    }

    launch() {
        if (this.password === "black300") {
            return this.missile.fire()
        } else {
            return this.missile.selfDestruction()
        }
    }
}