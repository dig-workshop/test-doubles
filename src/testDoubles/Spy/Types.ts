import {AnswerMissile} from "../../answer/Spy/AnswerTypes";

export type Missile = {
    fire: () => void　
    selfDestruction: () => void
}

export type LaunchMissileSystem = {
    password: string
    missile: AnswerMissile
    launch: () => void
}
