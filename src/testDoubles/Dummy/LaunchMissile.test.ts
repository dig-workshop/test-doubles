import {DummyMissile} from "./DummyMissile";
import {LaunchMissileImpl} from "./LaunchMissile";
import InvalidPassword from "./InvalidPassword";

// ダミーオブジェクトはテスト中でテスト対象物の利用に必要なコンポーネントの代品です。
// ただし、ダミーオブジェクトは、スタブ・スパイ・モック・フェイクオブジェクトで挙げた他のものとは異なり、何の機能も備えていません。
// ダミーオブジェクトはテスト対象の状況を作り出すのに便利ではありますが、テスト対象物がダミーオブジェクトを利用して動くわけではないというのがポイントです。
describe('ダミーのテスト', () => {
    it('LaunchMissileImpl（ミサイル発射装置）に DummyMissile（ダミーミサイル）をセットして launchMissile.launch() メソッドを実行した場合の返り値が throw new Error("これはダミーミサイルです") になること', () => {
        const dummyMissile = new DummyMissile()
        const password = new InvalidPassword()
        const launchMissile = new LaunchMissileImpl(dummyMissile, password)

        launchMissile.launch()
    });
})
