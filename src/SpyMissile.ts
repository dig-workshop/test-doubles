import {FireResult, Missile} from "./LaunchMissile";

export class SpyMissile implements Missile {
    result:FireResult = {name:"",result:undefined}
    fire_isCalled = false

    fire(): FireResult {
        this.fire_isCalled = true

        return this.result
    }
}