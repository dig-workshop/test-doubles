import {SpyMissile} from "./SpyMissile";
import {LaunchMissileImpl} from "./LaunchMissile";

// テストスパイはテスト対象物の依存コンポーネントの代品として動作し、依存コンポーネントにどのようなアクセスがあったかを記録するものです。
// コンポーネントへのアクセスというのは「メソッド呼び出し」のことです。
// 単に呼び出しを記録するだけではなく、記録した内容について検証を行う機能を兼ね備えていることもあります。
describe('スパイのテスト', () => {
    it('LaunchMissileImpl（ミサイル発射装置）に SpyMissile をセットして launchMissile.launch() を実行した場合、passwordCheck() が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const launchMissile = new LaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.passwordCheck_isCalled).toBeTruthy()
    });

    it('passwordCheck()が正しいパスワードの場合、fireメソッドが呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        spyMissile.passwordCheck_returnValue = "正しいパスワード"
        const launchMissile = new LaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.fire_isCalled).toBeTruthy()
    });

    it('passwordCheck()が不正なパスワードの場合、selfDestructionメソッドが呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        spyMissile.passwordCheck_returnValue = "不正なパスワード"
        const launchMissile = new LaunchMissileImpl(spyMissile)

        launchMissile.launch()

        expect(spyMissile.selfDestruction_isCalled).toBeTruthy()
    });
})
