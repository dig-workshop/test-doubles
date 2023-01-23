import {FireResult, Missile} from "../../LaunchMissile";

export class MockMissile implements Missile {
    password = ""

    fire(): FireResult {
        if (this.password === "black300") {
            return {name: "モックミサイル", result: "発射しました"}
        } else {
            return {name: "モックミサイル", result: "発射できません"}
        }
    }
}