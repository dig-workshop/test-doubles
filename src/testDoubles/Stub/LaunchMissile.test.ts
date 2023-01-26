import {StubFalseMissile, StubTrueMissile} from "./StubMissile";
import {LaunchMissileImpl} from "./LaunchMissile";

// テストスタブはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントがあらかじめ指定したとおりの挙動をします。
// 挙動というのは「メソッドの戻り値」や「 public なプロパティの値」のことです。
// 特定の状況下でのテストがやりやすくなります。
describe('スタブのテスト', () => {
    it('LaunchMissileImpl（ミサイル発射装置）に StubTrueMissile（発射可能なミサイル）をセットして launchMissile.launch()を実行した場合の返り値が ミサイルを発射しました になること', () => {
        const stubTrueMissile = new StubTrueMissile()
        const launchMissile = new LaunchMissileImpl(stubTrueMissile)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('AnswerLaunchMissileImpl（ミサイル発射装置）に StubFalseMissile（発射不可能なミサイル）をセットして launchMissile.launch()を実行した場合の返り値が 自爆しました になること', () => {
        const stubFalseMissile = new StubFalseMissile()
        const launchMissile = new LaunchMissileImpl(stubFalseMissile)

        expect(launchMissile.launch()).toBe("自爆しました")
    });
})
