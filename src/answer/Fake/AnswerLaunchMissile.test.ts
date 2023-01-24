import {AnswerFakeMissile} from "./AnswerFakeMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

describe('フェイクのテスト', () => {
    it('正しいpasswordが設定されており、天気APIの結果が雨以外ならミサイルを発射する', async () => {
        const fakeMissile = new AnswerFakeMissile()
        fakeMissile.password = "black300"

        const launchMissile = new AnswerLaunchMissileImpl(fakeMissile)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });
})