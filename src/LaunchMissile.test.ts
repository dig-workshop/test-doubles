import {LaunchMissileImpl} from "./LaunchMissile";
import {DummyMissile} from "./DummyMissile";
import {RealMissile} from "./RealMissile";
import {SpyMissile} from "./SpyMissile";
import {StubFalseMissile, StubTrueMissile} from "./StubMissile";
import {MockMissile} from "./MockMissile";
import {FakeMissile} from "./FakeMissile";

describe('test doubles について', () => {

    it('本物のミサイルの場合', () => {
        const realMissile = new RealMissile()
        realMissile.password = "black300"
        const launchMissile = new LaunchMissileImpl(realMissile)

        expect(launchMissile.launch()).toEqual({
            name: "本物のミサイル",
            result: "発射しました"
        })
    });

    it('ダミーの場合', () => {
        const dummyMissile = new DummyMissile()
        const launchMissile = new LaunchMissileImpl(dummyMissile)

        expect(() => launchMissile.launch()).toThrowError("これはダミーミサイルです")
    });

    describe('スタブのテスト', () => {

        it('発射可能なスタブの場合', () => {
            const stubTrueMissile = new StubTrueMissile()
            const launchMissile = new LaunchMissileImpl(stubTrueMissile)

            expect(launchMissile.launch()).toEqual({
                name: "スタブミサイル",
                result: "発射しました",
            })
        });

        it('発射不可能なスタブの場合', () => {
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

        it('launch() を実行した結果、ミサイルが発射できたか', () => {
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
            mockMissile.result = {name: "モックミサイル", result: "発射しました"}
            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射しました",
            })
        });

        it('正しくないpasswordが設定されている場合、ミサイルを発射しない', () => {
            const mockMissile = new MockMissile()
            mockMissile.password = "white200"
            mockMissile.result = {name: "モックミサイル", result: "発射できません"}
            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射できません",
            })
        });
    })

    describe('フェイクのテスト', () => {

        it('正しいpasswordが設定されている場合、ミサイルを発射する', () => {
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
