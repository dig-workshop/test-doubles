import {AnswerFakeMissile} from "./AnswerFakeMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";
import fakeJson from "../../resources/fake.json";

// フェイクのテスト
describe('正しいpasswordが設定されている場合', () => {
    it('天気APIの結果が雨以外ならミサイルを発射する', async () => {
        const fakeMissile = new AnswerFakeMissile()
        const password = "black300"
        fakeMissile.nowWeather = fakeJson.forecasts[0].telop // 文字列"晴れ"が取得できる
        const launchMissile = new AnswerLaunchMissileImpl(fakeMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('天気APIの結果が雨ならミサイルを発射しない', async () => {
        const fakeMissile = new AnswerFakeMissile()
        const password = "black300"
        fakeMissile.nowWeather = fakeJson.forecasts[1].telop // 文字列"雨"が取得できる
        const launchMissile = new AnswerLaunchMissileImpl(fakeMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射できません")
    });
})