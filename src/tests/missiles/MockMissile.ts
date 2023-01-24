import {Missile} from "../../Types";

export class MockMissile implements Missile {
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

        this.checkedFire()
    }

    selfDestruction(): void {

        this.checkedSelfDestruction()
    }



    checkedFire() {
        expect(this.fireWasCalled).toBe(true)
        expect(this.selfDestructionWasCalled).toBe(false)
    }

    checkedSelfDestruction() {
        expect(this.fireWasCalled).toBe(true)
        expect(this.selfDestructionWasCalled).toBe(false)
    }
}