import {FireResult, Missile} from "../../LaunchMissile";
import fakeJson from '../../resources/fake.json'

export class AnswerFakeMissile implements Missile {
    password = ""
    trueResult: FireResult = {name: "フェイクミサイル", result: "発射しました"}
    falseResult: FireResult = {name: "フェイクミサイル", result: "発射できません"}

    fire(): FireResult {

        // Fakeは実際のAPIを使用しない（あくまで一例）
        const nowWeather = fakeJson.forecasts[0].telop

        // パスワードと天気によって発射するかしないかを決める
        if (this.password === "black300" && nowWeather !== "雨") {
            return this.trueResult
        } else {
            return this.falseResult
        }

    }

}