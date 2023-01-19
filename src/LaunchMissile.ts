export type FireResult = {
    name: string
    result: "発射しました" | "発射できません" | undefined
}

export type Missile = {
    fire: () => FireResult | void
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
        const launchResult = this.missile.fire()
        return launchResult
    }

}