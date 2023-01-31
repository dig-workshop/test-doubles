export type Missile = {
    fire: () => void
}

export type PasswordProvider = {
    getValue: () => Promise<string>
}

export type LaunchMissileSystem = {
    passwordProvider: PasswordProvider
    missile: Missile
    launch: () => void
}
