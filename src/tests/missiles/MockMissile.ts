import {Missile} from "../../LaunchMissile";

export class MockMissile implements Missile {
    password = ""

    fire(): boolean {
        if (this.password === "black300") {

        } else {

        }
    }
}