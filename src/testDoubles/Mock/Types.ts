export type Missile = {
    fire: () => void
    selfDestruction: () => void
}

export type LaunchMissileSystem = {
    password: string
    missile: Missile
    launch: () => void
}
