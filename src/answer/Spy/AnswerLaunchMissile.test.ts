import {AnswerSpyMissile} from "./AnswerSpyMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// スパイのテスト
describe('ミサイル発射システム（LaunchMissileImpl）にパスワードをセットしてミサイルに発射指示（launchMissile.launch）をした場合', () => {

    it('、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        // const password = "black300"
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.fire_isCalled).toBeTruthy()
    });

    // it('ミサイル発射システム（LaunchMissileImpl）に不正なパスワードをセットしてミサイルに発射指示（launchMissile.launch）をした場合、spyMissile.selfDestruction(）が呼ばれていること', () => {
    //     const spyMissile = new AnswerSpyMissile()
    //     const password = "white200"
    //     const launchMissile = new AnswerLaunchMissileImpl(spyMissile, password)
    //
    //     launchMissile.launch()
    //
    //     expect(spyMissile.selfDestruction_isCalled).toBeTruthy()
    // });
})
