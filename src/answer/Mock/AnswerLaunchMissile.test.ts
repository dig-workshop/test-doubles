import {AnswerMockMissile} from "./AnswerMockMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

describe('モックのテスト', () => {
    it('正しいpasswordが設定されている場合、ミサイルを発射して自爆はしないこと', () => {
        const mockMissile = new AnswerMockMissile()
        mockMissile.password = "black300"

        const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
        launchMissile.launch()
    });

    it('不正なpasswordが設定されている場合、ミサイルを発射せず自爆すること', () => {
        const mockMissile = new AnswerMockMissile()
        mockMissile.password = "white200"

        const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
        launchMissile.launch()
    });
})
