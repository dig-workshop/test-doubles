import {LaunchMissileSystem, Password} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    password: Password

    constructor(missile: Password) {
        this.password = missile
    }

    launch(): string {
        if (this.password) {
            return "ミサイルを発射しました"
        } else {
            return "自爆しました"
        }
    }
}