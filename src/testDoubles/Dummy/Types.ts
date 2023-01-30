export type Missile = {
    fire: () => void
}

export type LaunchMissileSystem = {
    missile: Missile
    launch: () => void
}
