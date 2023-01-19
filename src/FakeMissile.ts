import {FireResult, Missile} from "./LaunchMissile";

export class FakeMissile implements Missile {
    password = ""
    trueResult:FireResult = {name:"フェイクミサイル",result:"発射しました"}
    falseResult:FireResult = {name:"フェイクミサイル",result:"発射できません"}

    fire(): FireResult {
        if (this.password === "black300") {
            return this.trueResult
        } else {
            return this.falseResult
        }
    }
}