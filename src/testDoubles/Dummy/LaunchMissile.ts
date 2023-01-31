import {LaunchMissileSystem, Missile} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile

    constructor(missile: Missile) {
        this.missile = missile
    }

    launch() {
        // this.missile.fire()
    }
}