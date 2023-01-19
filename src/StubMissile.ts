import {FireResult, Missile} from "./LaunchMissile";

export class StubTrueMissile implements Missile {
    fire(): FireResult {
        return {
            name: "スタブミサイル",
            result: "発射しました",
        }
    }
}

export class StubFalseMissile implements Missile {
    fire(): FireResult {
        return {
            name: "スタブミサイル",
            result: "発射できません",
        }
    }
}