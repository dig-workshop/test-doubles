import {MockMissile} from './MockMissile'
import {LaunchMissileImpl} from './LaunchMissile'
import SpyMissile from './SpyMissile'

// また仕様が変わって、発射されなかった場合にミサイルを無効化するようににdisableメソッドを呼ぶことになりました。
// そのため、発射されるテストケースでは、fireが呼ばれることに加えて、disableが呼ばれていないことも合わせてテストしたいです。
// 発射されないテストケースも同様に、fireが呼ばれないことに加えて、disableが呼ばれていることを合わせてテストします。
// Spyをそのように書き換えると、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートが含まれることとなりましたが、それはもうすでにSpyではなくMock（自己検証するSpy）です。

describe('ミサイル発射システム（LaunchMissileImpl）のテスト', () => {

    describe('リファクタ前', () => {
        it('正しいpasswordが設定されている場合、ミサイルを発射して自爆はしないこと', () => {
            const spyMissile = new SpyMissile()
            const correctPassword = 'black300'
            const launchMissile = new LaunchMissileImpl(spyMissile, correctPassword)


            launchMissile.launch()


            expect(spyMissile.fire_wasCalled).toBeTruthy()
            expect(spyMissile.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordが設定されている場合、ミサイルを発射せず自爆すること', () => {
            const spyMissile = new SpyMissile()
            const invalidPassword = 'white200'
            const launchMissile = new LaunchMissileImpl(spyMissile, invalidPassword)


            launchMissile.launch()


            expect(spyMissile.fire_wasCalled).not.toBeTruthy()
            expect(spyMissile.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordが設定されている場合、ミサイルを発射して自爆はしないこと', () => {
            const mockMissile = new MockMissile()
            const correctPassword = 'black300'
            const launchMissile = new LaunchMissileImpl(mockMissile, correctPassword)


            launchMissile.launch()


            mockMissile.verifyFire()
        })

        it('不正なpasswordが設定されている場合、ミサイルを発射せず自爆すること', () => {
            const mockMissile = new MockMissile()
            const invalidPassword = 'white200'
            const launchMissile = new LaunchMissileImpl(mockMissile, invalidPassword)


            launchMissile.launch()


            mockMissile.verifyDisable()
        })
    })
})

