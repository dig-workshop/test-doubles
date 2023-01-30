import {AnswerMissile} from "./AnswerTypes";

export class AnswerStubMissile implements AnswerMissile {

    fire() {
        return "ミサイルを発射しました"
    }

    selfDestruction() {
        return "自爆しました"
    }
}