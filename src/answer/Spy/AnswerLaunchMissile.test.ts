import {AnswerSpyMissile} from "./AnswerSpyMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";


describe('スパイのテスト', () => {
    it('AnswerLaunchMissileImpl（ミサイル発射装置）に SpyMissile をセットして launchMissile.launch() を実行した場合、passwordCheck() が呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.passwordCheck_isCalled).toBeTruthy()
    });

    it('passwordCheck()が正しいパスワードの場合、fireメソッドが呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        spyMissile.passwordCheck_returnValue = "正しいパスワード"
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.fire_isCalled).toBeTruthy()
    });

    it('passwordCheck()が不正なパスワードの場合、selfDestructionメソッドが呼ばれていること', () => {
        const spyMissile = new AnswerSpyMissile()
        spyMissile.passwordCheck_returnValue = "不正なパスワード"
        const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.selfDestruction_isCalled).toBeTruthy()
    });
})
