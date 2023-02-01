import {Missile} from './Types'

// Spyの役割を果たすように書き換えてください
export default class SpyMissile implements Missile {
    fire_wasCalled = false
    fire(): void {
    }

    disable_wasCalled = false
    disable(): void {
    }

}