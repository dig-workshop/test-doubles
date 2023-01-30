import {AnswerMockMissile} from "./AnswerMockMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// モックのテスト
it('正しいpasswordが設定されている場合、ミサイルを発射して自爆はしないこと', () => {
    const mockMissile = new AnswerMockMissile()
    const password = "black300"

    const launchMissile = new AnswerLaunchMissileImpl(mockMissile, password)
    launchMissile.launch()

    mockMissile.verifyFire()
})

it('不正なpasswordが設定されている場合、ミサイルを発射せず自爆すること', () => {
    const mockMissile = new AnswerMockMissile()
    const password = "white200"

    const launchMissile = new AnswerLaunchMissileImpl(mockMissile, password)
    launchMissile.launch()

    mockMissile.verifySelfDestruction()
})
