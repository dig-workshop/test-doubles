import {AnswerLaunchMissileSystem, AnswerMissile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements AnswerLaunchMissileSystem {
    missile: AnswerMissile

    constructor(missile: AnswerMissile) {
        this.missile = missile
    }

    launch() {
        const passwordCheckResult = this.missile.passwordCheck()

        if (passwordCheckResult === "正しいパスワード") {
            return this.missile.fire()
        } else {
            return this.missile.selfDestruction()
        }
    }

}