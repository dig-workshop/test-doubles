import {Missile} from "../../LaunchMissile";

export class StubTrueMissile implements Missile {
    fire(): boolean {
        return true
    }
}

export class StubFalseMissile implements Missile {
    fire(): boolean {
        return false
    }
}