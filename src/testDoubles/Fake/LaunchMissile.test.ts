import {FakeMissile} from "./FakeMissile";
import {LaunchMissileImpl} from "./LaunchMissile";
import fakeJson from "../../resources/fake.json";

// フェイクオブジェクトはテスト対象物の依存コンポーネント(関数など)の代品として動作し、本物のコンポーネントと同等の挙動をするものです。
// ただし、テストスパイやモックオブジェクトとは異なり、フェイクオブジェクトは「検証」のために使用するものではありません。
// フェイクオブジェクトは次のようなときに使用するものです。
// 本物のコンポーネントが未実装でまだ利用できない
// 本物のコンポーネントを使うとデータの変更や削除等の望ましくない副作用が発生する
// 本物のコンポーネントを使うとテストが大幅に遅くなる

// フェイクのテスト
describe('正しいpasswordが設定されている場合', () => {
    it('天気APIの結果が雨以外ならミサイルを発射する', async () => {
        const fakeMissile = new FakeMissile()
        const password = "black300"
        fakeMissile.nowWeather = fakeJson.forecasts[0].telop // 文字列"晴れ"が取得できる
        const launchMissile = new LaunchMissileImpl(fakeMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射しました")
    });

    it('天気APIの結果が雨ならミサイルを発射しない', async () => {
        const fakeMissile = new FakeMissile()
        const password = "black300"
        fakeMissile.nowWeather = fakeJson.forecasts[1].telop // 文字列"雨"が取得できる
        const launchMissile = new LaunchMissileImpl(fakeMissile, password)

        expect(launchMissile.launch()).toBe("ミサイルを発射できません")
    });
})