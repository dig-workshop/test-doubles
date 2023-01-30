import {SpyMissile} from "./SpyMissile";
import {LaunchMissileImpl} from "./LaunchMissile";

// テストスパイはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントにどのようなアクセスがあったかを記録するものです。
// コンポーネントへのアクセスというのは「メソッド呼び出し」のことです。

// スパイのテスト
describe('ミサイル発射システム（LaunchMissileImpl）にパスワードをセットしてミサイルに発射指示（launchMissile.launch）をした場合', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const password = "black300"
        const launchMissile = new LaunchMissileImpl(spyMissile, password)

        launchMissile.launch()

        expect(spyMissile.fire_isCalled).toBeTruthy()
    });

    it('間違ったパスワードの場合、spyMissile.selfDestruction(）が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const password = "white200"
        const launchMissile = new LaunchMissileImpl(spyMissile, password)

        launchMissile.launch()

        expect(spyMissile.selfDestruction_isCalled).toBeTruthy()
    });
})
