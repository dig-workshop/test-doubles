import {LaunchMissileImpl} from "./LaunchMissile";
import {DummyMissile} from "./testDoublesMissiles/DummyMissile";
import {SpyMissile} from "./testDoublesMissiles/SpyMissile";
import {StubFalseMissile, StubTrueMissile} from "./testDoublesMissiles/StubMissile";
import {MockMissile} from "./testDoublesMissiles/MockMissile";
import {FakeMissile} from "./testDoublesMissiles/FakeMissile";

// Test Doubleは、テストの対象が他のモジュール（クラスや関数など）に依存している場合、
// その代役として使われるモジュールのことです。
// TestsDoublesの作成者であるGerardMeszarosによると、Test Doubleは5つのカテゴリに分類できます。
describe('test doubles について', () => {



    // ダミーオブジェクトは、受け渡されることはあるが実際に使用されることはない。
    // パラメータリストを埋めたいだけといった場合に利用されることが多い。
    describe('ダミーのテスト', () => {
        it('ミサイル発射装置にミサイルがセットできるかどうかテストしたい', () => {
            const dummyMissile = new DummyMissile()
            const launchMissile = new LaunchMissileImpl(dummyMissile)

            expect(() => launchMissile.launch()).toThrowError("これはダミーミサイルです")
        });
    })



    // スタブはテスト時の呼び出しに対して、あらかじめ用意された結果を返す。
    describe('スタブのテスト', () => {

        it('launch() して発射可能なミサイルの場合、発射することを確認したい', () => {
            const stubTrueMissile = new StubTrueMissile()
            const launchMissile = new LaunchMissileImpl(stubTrueMissile)

            expect(launchMissile.launch()).toEqual({
                name: "スタブミサイル",
                result: "発射しました",
            })
        });

        it('launch() して発射不可能なミサイルの場合、発射できないことを確認したい', () => {
            const stubFalseMissile = new StubFalseMissile()
            const launchMissile = new LaunchMissileImpl(stubFalseMissile)

            expect(launchMissile.launch()).toEqual({
                name: "スタブミサイル",
                result: "発射できません",
            })
        });
    })



    describe('スパイのテスト', () => {

        it('launch() を実行した結果、fire() が呼ばれているか', () => {
            const spyMissile = new SpyMissile()
            const launchMissile = new LaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(spyMissile.fire_isCalled).toBe(true)
        });

        it('launch() を実行した結果、ミサイルが発射できたか（スタブより柔軟に出来る）', () => {
            const spyMissile = new SpyMissile()
            spyMissile.result = {
                name: "スパイミサイル",
                result: "発射しました",
            }
            const launchMissile = new LaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(launchMissile.launch()).toEqual({
                name: "スパイミサイル",
                result: "発射しました",
            })
        });
    })



    describe('モックのテスト', () => {

        it('正しいpasswordが設定されている場合、ミサイルを発射する', () => {
            const mockMissile = new MockMissile()
            mockMissile.password = "black300"

            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射しました",
            })
        });

        it('正しくないpasswordが設定されている場合、ミサイルを発射しない', () => {
            const mockMissile = new MockMissile()
            mockMissile.password = "white200"

            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射できません",
            })
        });
    })


    // フェイクオブジェクトは実際に動作するよう実装されてはいるが、
    // 手抜きがされているので製品版には向かない（InMemoryDatabaseが良い例である）。
    describe('フェイクのテスト', () => {

        it('正しいpasswordが設定されており、天気APIの結果が雨以外ならミサイルを発射する', async () => {
            const fakeMissile = new FakeMissile()
            fakeMissile.password = "black300"

            const launchMissile = new LaunchMissileImpl(fakeMissile)

            expect(launchMissile.launch()).toEqual({
                name: "フェイクミサイル",
                result: "発射しました",
            })
        });
    })
})
