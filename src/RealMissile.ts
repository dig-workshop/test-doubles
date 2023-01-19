import {FireResult, Missile} from "./LaunchMissile";

export class RealMissile implements Missile {
    password = ""
    trueResult:FireResult = {name:"本物のミサイル",result:"発射しました"}
    falseResult:FireResult = {name:"本物のミサイル",result:"発射できません"}

    fire(): FireResult {
        if (this.password === "black300") {
            return this.trueResult
        } else {
            return this.falseResult
        }
    }
}