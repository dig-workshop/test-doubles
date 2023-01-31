import {LaunchMissileSystem, Missile, PasswordProvider} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    passwordProvider: PasswordProvider
    missile: Missile

    constructor(missile: Missile, passwordProvider: PasswordProvider) {
        this.missile = missile
        this.passwordProvider = passwordProvider
    }

    launch() {
        // this.missile.fire()
    }
}