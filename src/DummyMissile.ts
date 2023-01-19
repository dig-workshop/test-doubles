import {Missile} from "./LaunchMissile";

export class DummyMissile implements Missile {

    fire() {
        throw new Error("これはダミーミサイルです")
    }
}