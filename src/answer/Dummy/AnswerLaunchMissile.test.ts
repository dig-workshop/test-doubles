import {AnswerDummyMissile} from "./AnswerDummyMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

describe('ダミーのテスト', () => {
    it('AnswerLaunchMissileImpl（ミサイル発射装置）に DummyMissile（ダミーミサイル）をセットして launchMissile.launch() メソッドを実行した場合の返り値が throw new Error("これはダミーミサイルです") になること', () => {
        const dummyMissile = new AnswerDummyMissile()
        const launchMissile = new AnswerLaunchMissileImpl(dummyMissile)

        expect(() => launchMissile.launch()).toThrowError("これはダミーミサイルです")
    });
})
