import {AnswerStubFalseMissile, AnswerStubTrueMissile} from "./AnswerStubMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// スタブのテスト
describe('AnswerLaunchMissileImpl（ミサイル発射装置）に Missile をセットしてミサイル発射指示（launchMissile.launch）をした場合', () => {

    it('発射可能なミサイル（StubTrueMissile）の場合、返り値が "ミサイルを発射しました" になること', () => {
        const stubTrueMissile = new AnswerStubTrueMissile()
        const launchMissile = new AnswerLaunchMissileImpl(stubTrueMissile)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('発射不可能なミサイル（StubFalseMissile）の場合、返り値が "ミサイルを発射できません" になること', () => {
        const stubFalseMissile = new AnswerStubFalseMissile()
        const launchMissile = new AnswerLaunchMissileImpl(stubFalseMissile)

        expect(launchMissile.launch()).toBe("ミサイルを発射できません")
    });
})
