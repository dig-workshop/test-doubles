import {AnswerMissile} from "./AnswerTypes";

export class AnswerFakeMissile implements AnswerMissile {
    nowWeather = ""

    fire() {
        // パスワードと天気によって発射するかしないかを決める
        if (this.nowWeather !== "雨") {
            return "ミサイルを発射しました"
        } else {
            return "ミサイルを発射できません"
        }
    }

    selfDestruction() {
        return "自爆しました"
    }

}

