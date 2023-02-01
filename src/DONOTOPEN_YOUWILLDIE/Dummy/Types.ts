export type Missile = {
    fire: () => void
}

export type LaunchMissileSystem = {
    password: string
    missile: Missile
    launch: () => void
}
