import {AnswerStubMissile} from "./AnswerStubMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// スタブのテスト
describe('AnswerLaunchMissileImpl（ミサイル発射装置）に Missile をセットしてミサイル発射指示（launchMissile.launch）をした場合', () => {

    it('パスワードが正しかったら、返り値が "ミサイルを発射しました" になること', () => {
        const stubTrueMissile = new AnswerStubMissile()
        const password = "black300"
        const launchMissile = new AnswerLaunchMissileImpl(stubTrueMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('パスワードが正しくなかったら、返り値が "自爆しました" になること', () => {
        const stubFalseMissile = new AnswerStubMissile()
        const password = "white200"
        const launchMissile = new AnswerLaunchMissileImpl(stubFalseMissile, password)

        expect(launchMissile.launch()).toBe("自爆しました")
    });
})
