import {Missile} from "./Types";

export class RealMissile implements Missile {
    password = ""

    passwordCheck() {
        if (this.password === "black300") {
            return "正しいパスワード"
        } else {
            return "不正なパスワード"
        }
    }

    async fire() {

        // 天気をAPIで取得
        const nowWeather = await fetch("https://weather.tsukumijima.net/api/forecast/city/230010")
            .then((response) => response.json()).then((user) => {
                console.log(user.forecasts[0].telop)
                return user.forecasts[0].telop
            })

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