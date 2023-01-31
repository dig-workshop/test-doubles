import {AnswerDummyMissile} from "./AnswerDummyMissile";
import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";

// ダミーのテスト
it('AnswerLaunchMissileImpl（ミサイル発射装置）に DummyMissile（ダミーミサイル）をセットして launchMissile.launch() メソッドを実行　こと', () => {
    const dummyMissile = new AnswerDummyMissile()
    const launchMissile = new AnswerLaunchMissileImpl(dummyMissile)

    launchMissile.launch()
})
