export type Missile = {
    fire: () => Promise<boolean> | boolean | void
}

export type MockMissile = {
    passwordCheck: () => boolean
    fire: () => void
    selfDestruction: () => void
}

export type LaunchMissileSystem = {
    launch: () => boolean
}
