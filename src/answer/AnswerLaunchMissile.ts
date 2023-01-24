import {LaunchMissileSystem, Missile} from "./AnswerTypes";

export class AnswerLaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile

    constructor(missile: Missile) {
        this.missile = missile
    }

    launch() {
        const passwordCheckResult = this.missile.passwordCheck()

        if (passwordCheckResult === true) {
            this.missile.fire()
            return true
        } else {
            this.missile.selfDestruction()
            return false
        }
    }

}