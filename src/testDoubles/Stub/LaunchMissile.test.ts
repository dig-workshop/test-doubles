import {LaunchMissileImpl} from "./LaunchMissile";
import {StubMissile} from "./StubMissile";

// テストスタブはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントがあらかじめ指定したとおりの挙動をします。
// 挙動というのは「メソッドの戻り値」や「 public なプロパティの値」のことです。
// 特定の状況下でのテストがやりやすくなります。

// スタブのテスト
describe('LaunchMissileImpl（ミサイル発射装置）に StubTrueMissile（発射可能なミサイル）をセットして launchMissile.launch()を実行した場合', () => {

    it('パスワードが正しかったら、返り値が ミサイルを発射しました になること', () => {
        const stubMissile = new StubMissile()
        const password = "black300"
        const launchMissile = new LaunchMissileImpl(stubMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('パスワードが正しくなかったら、返り値が 自爆しました になること', () => {
        const stubMissile = new StubMissile()
        const password = "white200"
        const launchMissile = new LaunchMissileImpl(stubMissile, password)

        expect(launchMissile.launch()).toBe("自爆しました")
    });
})
