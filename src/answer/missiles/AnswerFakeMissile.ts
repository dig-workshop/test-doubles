import {Missile} from "../../Types";
import fakeJson from '../../resources/fake.json'

export class AnswerFakeMissile implements Missile {
    password = ""

    fire(): boolean {

        // Fakeは実際のAPIを使用しない（あくまで一例）
        const nowWeather = fakeJson.forecasts[0].telop

        // パスワードと天気によって発射するかしないかを決める
        if (this.password === "black300" && nowWeather !== "雨") {
            return true
        } else {
            return false
        }

    }

}