export type FireResult = {
    name: string
    result: string | undefined
}

export type Missile = {
    fire: () => Promise<FireResult> | FireResult | void
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