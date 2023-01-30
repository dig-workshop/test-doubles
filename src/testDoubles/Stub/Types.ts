export type Missile = {
    fire: () => string
    selfDestruction: () => string
}

export type LaunchMissileSystem = {
    password: string
    missile: Missile
    launch: () => void
}
