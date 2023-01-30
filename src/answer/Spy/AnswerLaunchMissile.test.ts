import {AnswerSpyMissile} from "./AnswerSpyMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// スパイのテスト
describe('ミサイル発射システム（LaunchMissileImpl）にパスワードをセットしてミサイルに発射指示（launchMissile.launch）をした場合', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        const password = "black300"
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile, password)

        launchMissile.launch()

        expect(spyMissile.fire_isCalled).toBeTruthy()
    });

    it('間違ったパスワードの場合、spyMissile.selfDestruction(）が呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        const password = "white200"
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile, password)

        launchMissile.launch()

        expect(spyMissile.selfDestruction_isCalled).toBeTruthy()
    });
})
