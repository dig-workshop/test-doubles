import {AnswerMissile} from "./AnswerTypes";

export class AnswerMockMissile implements AnswerMissile {
    password = ""
    passwordCheck_isCalled = false
    fire_isCalled = false
    selfDestruction_isCalled = false

    passwordCheck() {
        this.passwordCheck_isCalled = true

        if (this.password === "black300") {
            return "正しいパスワード"
        } else {
            return "不正なパスワード"
        }
    }

    fire() {
        this.fire_isCalled = true
        return "ミサイルを発射しました"
    }

    selfDestruction() {
        this.selfDestruction_isCalled = true
        this.checkedSelfDestruction()
        return "自爆しました"
    }

    checkedFire() {
        expect(this.fire_isCalled).toBe(true)
        expect(this.selfDestruction_isCalled).toBe(false)
    }

    checkedSelfDestruction() {
        expect(this.fire_isCalled).toBe(false)
        expect(this.selfDestruction_isCalled).toBe(true)
    }
}