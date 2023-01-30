export type AnswerMissile = {
    fire: () => void
}

export type AnswerLaunchMissileSystem = {
    missile: AnswerMissile
    launch: () => void
}
