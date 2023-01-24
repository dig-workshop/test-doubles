export type Missile = {
    fire: () => Promise<boolean> | boolean | void
}

export type LaunchMissileSystem = {
    launch: () => void
}

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile

    constructor(missile: Missile) {
        this.missile = missile
    }

    launch() {
        const fireResult = this.missile.fire()
        return fireResult
    }

}