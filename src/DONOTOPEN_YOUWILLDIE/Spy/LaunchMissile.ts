import {LaunchMissileSystem, Missile} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    // ここにコードを記述して下さい
    missile: Missile
    password: string

    constructor(missile: Missile, password: string) {
        this.missile = missile
        this.password = password
    }

    launch() {
        // ここにコードを記述して下さい
        if (this.password === 'black300') {
            this.missile.fire()
        }
    }
}