import {Missile} from "./Types";

export class SpyMissile implements Missile {
    // ここにコードを記述して下さい
    fire_wasCalled = false
    fire() {
        this.fire_wasCalled = true
    }
}