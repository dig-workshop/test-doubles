import {AnswerStubFalseMissile, AnswerStubTrueMissile} from "./AnswerStubMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";


describe('スタブのテスト', () => {
    it('AnswerLaunchMissileImpl（ミサイル発射装置）に StubTrueMissile（発射可能なミサイル）をセットして launchMissile.launch()を実行した場合の返り値が ミサイルを発射しました になること', () => {
        const stubTrueMissile = new AnswerStubTrueMissile()
        const launchMissile = new AnswerLaunchMissileImpl(stubTrueMissile)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('AnswerLaunchMissileImpl（ミサイル発射装置）に StubFalseMissile（発射不可能なミサイル）をセットして launchMissile.launch()を実行した場合の返り値が 自爆しました になること', () => {
        const stubFalseMissile = new AnswerStubFalseMissile()
        const launchMissile = new AnswerLaunchMissileImpl(stubFalseMissile)

        expect(launchMissile.launch()).toBe("自爆しました")
    });
})
