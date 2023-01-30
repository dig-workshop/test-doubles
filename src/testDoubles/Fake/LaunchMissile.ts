import {LaunchMissileSystem, Missile} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    password: string

    constructor(missile: Missile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        if (this.password=== "black300") {
            return this.missile.fire()
        } else {
            return this.missile.selfDestruction()
        }
    }

}