import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    missile: AnswerMissile

    constructor(missile: AnswerMissile) {
        this.missile = missile
    }

    launch() {
        // if (this.passwordCheck() === true) {
            this.missile.fire()
        // } else {
        //     return this.missile.selfDestruction()
        // }
    }

    // passwordCheck() {
    //     if (this.password === "black300") {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

}