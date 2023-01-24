import {AnswerLaunchMissileImpl} from "./AnswerLaunchMissile";
import {AnswerFakeMissile} from "./missiles/AnswerFakeMissile";
import {AnswerMockMissile} from "./missiles/AnswerMockMissile";
import {AnswerSpyMissile} from "./missiles/AnswerSpyMissile";
import {AnswerStubFalseMissile, AnswerStubTrueMissile} from "./missiles/AnswerStubMissile";
import {AnswerDummyMissile} from "./missiles/AnswerDummyMissile";
import {Missile} from "./AnswerTypes";

describe('test doubles について', () => {

    describe('ダミーのテスト', () => {
        it('AnswerLaunchMissileImpl（ミサイル発射装置）に DummyMissile（ダミーミサイル）をセットして発射した場合、発射結果が throw new Error("これはダミーミサイルです") になること', () => {
            const dummyMissile = new AnswerDummyMissile()
            const launchMissile = new AnswerLaunchMissileImpl(Missile)

            expect(() => launchMissile.launch()).toThrowError("これはダミーミサイルです")
        });
    })

    describe('スタブのテスト', () => {
        it('AnswerLaunchMissileImpl（ミサイル発射装置）に StubTrueMissile（発射可能なミサイル）をセットして発射した場合、発射結果が true になること', () => {
            const stubTrueMissile = new AnswerStubTrueMissile()
            const launchMissile = new AnswerLaunchMissileImpl(stubTrueMissile)

            expect(launchMissile.launch()).toEqual(true)
        });

        it('AnswerLaunchMissileImpl（ミサイル発射装置）に StubFalseMissile（発射不可能なミサイル）をセットして発射した場合、発射結果が false になること', () => {
            const stubFalseMissile = new AnswerStubFalseMissile()
            const launchMissile = new AnswerLaunchMissileImpl(stubFalseMissile)

            expect(launchMissile.launch()).toEqual(false)
        });
    })

    describe('スパイのテスト', () => {
        it('AnswerLaunchMissileImpl（ミサイル発射装置）に SpyMissile をセットして発射した場合、fire() が呼ばれていること', () => {
            const spyMissile = new AnswerSpyMissile()
            const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(spyMissile.fire_isCalled).toBe(true)
        });

        it('AnswerLaunchMissileImpl（ミサイル発射装置）に SpyMissile（発射可能なミサイル）をセットして発射した場合、発射結果が true になること', () => {
            const spyMissile = new AnswerSpyMissile()
            spyMissile.result = true
            const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(launchMissile.launch()).toEqual(true)
        });

        it('AnswerLaunchMissileImpl（ミサイル発射装置）に SpyMissile（発射不可能なミサイル）をセットして発射した場合、発射結果が false になること', () => {
            const spyMissile = new AnswerSpyMissile()
            spyMissile.result = false
            const launchMissile = new AnswerLaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(launchMissile.launch()).toEqual(false)
        });
    })

    describe('モックのテスト', () => {
        it('正しいpasswordが設定されている場合、ミサイルを発射する', () => {
            const mockMissile = new AnswerMockMissile()
            mockMissile.password = "black300"

            const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
            launchMissile.launch()
        });

        it('正しくないpasswordが設定されている場合、ミサイルを発射しない', () => {
            const mockMissile = new AnswerMockMissile()
            mockMissile.password = "white200"

            const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
            launchMissile.launch()

        });
    })

    describe('フェイクのテスト', () => {
        it('正しいpasswordが設定されており、天気APIの結果が雨以外ならミサイルを発射する', async () => {
            const fakeMissile = new AnswerFakeMissile()
            fakeMissile.password = "black300"

            const launchMissile = new AnswerLaunchMissileImpl(fakeMissile)

            expect(launchMissile.launch()).toEqual(true)
        });
    })
})
