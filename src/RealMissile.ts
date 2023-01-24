import {Missile} from "./Types";

export class RealMissile implements Missile {
    password = ""

    async fire(): Promise<boolean> {

        // 天気をAPIで取得
        const nowWeather = await fetch("https://weather.tsukumijima.net/api/forecast/city/230010")
            .then((response) => response.json()).then((user) => {
                return user.forecasts[0].telop
            })

        // パスワードと天気によって発射するかしないかを決める
        if (this.password === "black300" && nowWeather !== "雨") {
            return true
        } else {
            return false
        }

    }

}