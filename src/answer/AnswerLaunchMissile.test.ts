import {LaunchMissileImpl} from "../LaunchMissile";
import {AnswerFakeMissile} from "./missiles/AnswerFakeMissile";
import {AnswerMockMissile} from "./missiles/AnswerMockMissile";
import {AnswerSpyMissile} from "./missiles/AnswerSpyMissile";
import {AnswerStubFalseMissile, AnswerStubTrueMissile} from "./missiles/AnswerStubMissile";
import {AnswerDummyMissile} from "./missiles/AnswerDummyMissile";

xdescribe('test doubles について', () => {

    describe('ダミーのテスト', () => {
        it('ミサイル発射装置にミサイルがセットできるかどうかテストしたい', () => {
            const dummyMissile = new AnswerDummyMissile()
            const launchMissile = new LaunchMissileImpl(dummyMissile)

            expect(() => launchMissile.launch()).toThrowError("これはダミーミサイルです")
        });
    })

    describe('スタブのテスト', () => {
        it('launch() して発射可能なミサイルの場合、発射することを確認したい', () => {
            const stubTrueMissile = new AnswerStubTrueMissile()
            const launchMissile = new LaunchMissileImpl(stubTrueMissile)

            expect(launchMissile.launch()).toEqual({
                name: "スタブミサイル",
                result: "発射しました",
            })
        });

        it('launch() して発射不可能なミサイルの場合、発射できないことを確認したい', () => {
            const stubFalseMissile = new AnswerStubFalseMissile()
            const launchMissile = new LaunchMissileImpl(stubFalseMissile)

            expect(launchMissile.launch()).toEqual({
                name: "スタブミサイル",
                result: "発射できません",
            })
        });
    })

    describe('スパイのテスト', () => {
        it('launch() を実行した結果、fire() が呼ばれているか', () => {
            const spyMissile = new AnswerSpyMissile()
            const launchMissile = new LaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(spyMissile.fire_isCalled).toBe(true)
        });

        it('launch() を実行した結果、ミサイルが発射できたか（スタブより柔軟に出来る）', () => {
            const spyMissile = new AnswerSpyMissile()
            spyMissile.result = {
                name: "スパイミサイル",
                result: "爆発しました",
            }
            const launchMissile = new LaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(launchMissile.launch()).toEqual({
                name: "スパイミサイル",
                result: "爆発しました",
            })
        });

        it('launch() を実行した結果、ミサイルが発射できたか（スタブより柔軟に出来る）', () => {
            const spyMissile = new AnswerSpyMissile()
            spyMissile.result = {
                name: "スパイミサイル",
                result: "爆発しませんでした",
            }
            const launchMissile = new LaunchMissileImpl(spyMissile)

            launchMissile.launch()

            expect(launchMissile.launch()).toEqual({
                name: "スパイミサイル",
                result: "爆発しませんでした",
            })
        });
    })

    describe('モックのテスト', () => {
        it('正しいpasswordが設定されている場合、ミサイルを発射する', () => {
            const mockMissile = new AnswerMockMissile()
            mockMissile.password = "black300"

            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射しました",
            })
        });

        it('正しくないpasswordが設定されている場合、ミサイルを発射しない', () => {
            const mockMissile = new AnswerMockMissile()
            mockMissile.password = "white200"

            const launchMissile = new LaunchMissileImpl(mockMissile)

            expect(launchMissile.launch()).toEqual({
                name: "モックミサイル",
                result: "発射できません",
            })
        });
    })

    describe('フェイクのテスト', () => {
        it('正しいpasswordが設定されており、天気APIの結果が雨以外ならミサイルを発射する', async () => {
            const fakeMissile = new AnswerFakeMissile()
            fakeMissile.password = "black300"

            const launchMissile = new LaunchMissileImpl(fakeMissile)

            expect(launchMissile.launch()).toEqual({
                name: "フェイクミサイル",
                result: "発射しました",
            })
        });
    })
})
