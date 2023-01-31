import {DummyMissile} from './DummyMissile'
import {LaunchMissileImpl} from './LaunchMissile'
import StubPasswordProvider from './StubPasswordProvider'

// スタブのテストでは、説明の簡略化のためにlaunchが文字列を返す仕様にしていました。
// ですが、本来はLaunchMissileImplが何かしらMissileというオブジェクトに対して、操作を与えた結果ミサイルが発射されるべきです。
// そこで、ミサイルを打つ時は、Missileオブジェクトとパスワードを渡し、正しければMissileのfireメソッドを呼ぶようにします。
// 本物のMissileオブジェクトのfireメソッドを呼んでしまうと、本物のミサイルが発射されてしまいます。
// また、LaunchMissileImplのlaunchメソッドには返り値がありません。
// Dummy（使うとエラーを出力するもの）を使用して、間違ったパスワードを渡した場合に、発射がされていないことを確認しましょう。


describe('LaunchMissileImpl（ミサイル発射装置）のテスト', () => {
    it('間違ったパスワードが返った場合、fireは実行されない', () => {
        // 間違ったパスワードが帰るようにStubに返り値をセットする
        const stubPasswordProvider = new StubPasswordProvider()
        const invalidPassword = 'white300'
        stubPasswordProvider.getValue_returnValue = Promise.resolve(invalidPassword)

        // 使うとエラーを出力するミサイル
        const dummyMissile = new DummyMissile()
        const launchMissile = new LaunchMissileImpl(dummyMissile, stubPasswordProvider)

        // ミサイルが発射されていなければエラーが出ず、テストが通るはず
        launchMissile.launch()
    })
})
