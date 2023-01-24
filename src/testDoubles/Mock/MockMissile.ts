import {Missile} from "./Types";

export class MockMissile implements Missile {
    // ここにコードを記述して下さい

    passwordCheck() {
        // ここにコードを記述して下さい

    }

    // fire() {
    // コメントアウトを解除してここにコードを記述して下さい

    // this.assertFire()

    // }

    // selfDestruction() {
    // コメントアウトを解除してここにコードを記述して下さい

    // this.assertSelfDestruction()

    // }

    assertFire() {
        expect(this.fire_isCalled).toBe(true)
        expect(this.selfDestruction_isCalled).toBe(false)
    }

    assertSelfDestruction() {
        expect(this.fire_isCalled).toBe(false)
        expect(this.selfDestruction_isCalled).toBe(true)
    }
}