import {LaunchMissileSystem, Missile} from "./Types";

export class AnswerLaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile

    constructor(missile: Missile) {
        this.missile = missile
    }

    launch() {
        // ここにコードを記述して下さい

    }

}