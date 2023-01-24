export type Missile = {
    passwordCheck: () => string
    fire: () => string
    selfDestruction: () => string
}

export type LaunchMissileSystem = {
    launch: () => string
}
