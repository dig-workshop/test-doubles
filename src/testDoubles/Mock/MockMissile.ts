import {Missile} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockMissile implements Missile {
    private fire_wasCalled = false
    fire(): void {
    }

    private disable_wasCalled = false
    disable(): void {
    }

    verifyFire() {
    }

    verifyDisable() {
    }
}