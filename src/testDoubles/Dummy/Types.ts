export type Missile = {
    fire: () => void
}

export type LaunchMissileSystem = {
    missile: Missile
    password: string
    launch: () => void
}
