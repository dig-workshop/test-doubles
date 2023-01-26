import {LaunchMissileSystem, Missile, Password} from "./Types";

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    password: Password

    constructor(missile: Missile, password: Password) {
        this.missile = missile
        this.password = password
    }

    launch() {
        // ここにコードを記述して下さい
        if (this.password.isValid) {
            this.missile.launch()
        }
    }
}