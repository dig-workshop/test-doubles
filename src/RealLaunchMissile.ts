import {LaunchMissileSystem, Missile} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile

    constructor(missile: Missile) {
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