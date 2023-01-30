export type AnswerMissile = {
    fire: () => void
    selfDestruction: () => void
}

export type AnswerLaunchMissileSystem = {
    password: string
    missile: AnswerMissile
    launch: () => void
}
