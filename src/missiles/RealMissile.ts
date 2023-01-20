import {FireResult, Missile} from "../LaunchMissile";

export class RealMissile implements Missile {
    password = ""
    trueResult:FireResult = {name:"本物のミサイル",result:"発射しました"}
    falseResult:FireResult = {name:"本物のミサイル",result:"発射できません"}

    async fire(): Promise<FireResult> {

        // 天気をAPIで取得
        const nowWeather =await fetch("https://weather.tsukumijima.net/api/forecast/city/230010")
            .then((response) => response.json()).then((user) => {return user.forecasts[0].telop})

        // パスワードと天気によって発射するかしないかを決める
        if (this.password === "black300" && nowWeather !== "雨") {
            return this.trueResult
        } else {
            return this.falseResult
        }

    }

}