export type Missile = {
    fire: () => Promise<string>
    selfDestruction: () => string
}

export type RealLaunchMissileSystem = {
    password: string
    missile: Missile
    launch: () => Promise<string> | string
}
