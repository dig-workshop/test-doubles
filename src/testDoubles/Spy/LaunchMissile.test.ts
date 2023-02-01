import {SpyMissile} from './SpyMissile'
import {LaunchMissileImpl} from './LaunchMissile'

// Dummyでは、ミサイルが発射されていないことのテストしかできませんでした。
// では正しく発射されるかどうかをテストするにはどうしたらよいでしょうか？
// Spy（呼ばれたか・呼ばれていないか・どのように呼ばれたかを記録するもの）を使いましょう。

describe('ミサイル発射システム（LaunchMissileImpl）のテスト', () => {

    it('正しいパスワードの場合、spyMissile.fire(）が呼ばれていること', () => {
        const spyMissile = new SpyMissile()
        const correctPassword = 'black300'
        const launchMissile = new LaunchMissileImpl(spyMissile, correctPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyMissile.fire(）が呼ばれないこと', () => {
        const spyMissile = new SpyMissile()
        const invalidPassword = 'white200'
        const launchMissile = new LaunchMissileImpl(spyMissile, invalidPassword)


        launchMissile.launch()


        expect(spyMissile.fire_wasCalled).not.toBeTruthy()
    })
})
