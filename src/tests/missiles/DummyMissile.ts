import {Missile} from "../../LaunchMissile";

export class DummyMissile implements Missile {

    fire(): void {
        throw new Error("これはダミーミサイルです")
    }
}
