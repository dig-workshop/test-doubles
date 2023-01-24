export type Missile = {
    passwordCheck: () => boolean
    fire?: () => boolean
    selfDestruction?: () => void
}

export type LaunchMissileSystem = {
    launch: () => boolean
}
