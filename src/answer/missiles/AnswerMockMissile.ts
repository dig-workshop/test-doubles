import {MockMissile} from "../../Types";

export class AnswerMockMissile implements MockMissile {
    password = ""
    selfDestructionWasCalled = false
    fireWasCalled = false

    passwordCheck(): boolean {
        if (this.password === "black300") {
            return true
        } else {
            return false
        }
    }

    fire(): void {
        this.fireWasCalled = true
        this.checkedFire()
    }

    selfDestruction(): void {
        this.selfDestructionWasCalled = true
        this.checkedSelfDestruction()
    }

    checkedFire() {
        expect(this.fireWasCalled).toBe(true)
        expect(this.selfDestructionWasCalled).toBe(false)
    }

    checkedSelfDestruction() {
        expect(this.fireWasCalled).toBe(false)
        expect(this.selfDestructionWasCalled).toBe(true)
    }
}