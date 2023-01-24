import {Missile} from "./Types";
import fakeJson from '../../resources/fake.json'

export class FakeMissile implements Missile {
    password = ""

    passwordCheck() {
        if (this.password === "black300") {
            return "正しいパスワード"
        } else {
            return "不正なパスワード"
        }
    }

    fire() {
        // Fakeは実際のAPIを使用しない（このjsonで取得できる値は "晴れ"）
        const nowWeather = fakeJson.forecasts[0].telop

        // パスワードと天気によって発射するかしないかを決める
        if (nowWeather !== "雨") {
            return "ミサイルを発射しました"
        } else {
            return "ミサイルを発射できません"
        }
    }

    selfDestruction() {
        return "自爆しました"
    }

}