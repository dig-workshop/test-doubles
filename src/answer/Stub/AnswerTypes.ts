export type AnswerMissile = {
    fire: () => string
    selfDestruction: () => string
}

export type AnswerLaunchMissileSystem = {
    password: string
    missile: AnswerMissile
    launch: () => string
}
