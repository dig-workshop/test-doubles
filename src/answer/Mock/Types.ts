export type Missile = {
    fire: () => void
    disable: () => void
}

export type LaunchMissileSystem = {
    password: string
    missile: Missile
    launch: () => void
}
