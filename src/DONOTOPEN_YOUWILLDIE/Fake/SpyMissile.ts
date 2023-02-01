import {Missile} from './Types'

export class SpyMissile implements Missile {

    fire_wasCalled = false

    fire() {
        this.fire_wasCalled = true
    }
}