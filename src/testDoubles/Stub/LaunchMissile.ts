import {LaunchMissileSystem, Missile} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    password: string
    missile: Missile

    constructor(missile: Missile, password: string) {
        this.password = password
        this.missile = missile
    }

    launch() {
        // ここにコードを記述して下さい

    }
}