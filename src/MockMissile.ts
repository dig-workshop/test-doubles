import {FireResult, Missile} from "./LaunchMissile";

export class MockMissile implements Missile {
    password = ""
    result: FireResult = {name: "", result: undefined}

    fire(): FireResult {
        if (this.password === "black300") {
            return this.result
        } else {
            return this.result
        }
    }
}