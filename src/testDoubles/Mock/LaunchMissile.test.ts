import {MockMissile} from "./MockMissile";
import {AnswerLaunchMissileImpl} from "./LaunchMissile";

// モックオブジェクトはテスト対象物の依存コンポーネントの代品として動作し、リアルタイムにコンポーネントへのアクセスを検証するものです。
// 基本的な機能はテストスパイと同じですが、テストスパイが対象の処理が終わった後に検証を行うのに対し、
// モックオブジェクトは対象の処理の途中にリアルタイムに検証を行います。
// また、モックオブジェクトもテストスパイと同じくスタブの機能を併せ持っていることがあります。
describe('モックのテスト', () => {
    it('正しいpasswordが設定されている場合、ミサイルを発射して自爆はしないこと', () => {
        const mockMissile = new MockMissile()
        mockMissile.password = "black300"

        const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
        launchMissile.launch()
    });

    it('不正なpasswordが設定されている場合、ミサイルを発射せず自爆すること', () => {
        const mockMissile = new MockMissile()
        mockMissile.password = "white200"

        const launchMissile = new AnswerLaunchMissileImpl(mockMissile)
        launchMissile.launch()
    });
})
