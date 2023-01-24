import {FireResult, Missile} from "../../LaunchMissile";

export class AnswerStubTrueMissile implements Missile {
    fire(): FireResult {
        return {
            name: "スタブミサイル",
            result: "発射しました",
        }
    }
}

export class AnswerStubFalseMissile implements Missile {
    fire(): FireResult {
        return {
            name: "スタブミサイル",
            result: "発射できません",
        }
    }
}