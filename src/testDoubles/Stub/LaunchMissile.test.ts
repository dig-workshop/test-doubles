import {InvalidPassword, ValidPassword} from "./StubMissile";
import {LaunchMissileImpl} from "./LaunchMissile";

// テストスタブはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントがあらかじめ指定したとおりの挙動をします。
// 挙動というのは「メソッドの戻り値」や「 public なプロパティの値」のことです。
// 特定の状況下でのテストがやりやすくなります。
describe('スタブのテスト', () => {
    it('ただしいパスワードをランチャーに渡すと「ミサイルを発射しました」が返る', () => {
        const validPassword = new ValidPassword()
        const launchMissile = new LaunchMissileImpl(validPassword)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('間違ったパスワードをランチャーに渡すと「自爆しました」が返る', () => {
        const invalidPassword = new InvalidPassword()
        const launchMissile = new LaunchMissileImpl(invalidPassword)

        expect(launchMissile.launch()).toBe("自爆しました")
    });
})
