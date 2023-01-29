import {AnswerMissile} from "./AnswerTypes";

export class AnswerMockMissile implements AnswerMissile {
    fire_isCalled = false
    selfDestruction_isCalled = false

    fire() {
        this.fire_isCalled = true
        return "ミサイルを発射しました"
    }

    selfDestruction() {
        this.selfDestruction_isCalled = true
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