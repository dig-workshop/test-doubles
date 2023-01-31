import {Missile} from "./Types";

export class DummyMissile implements Missile {
    fire() {
        throw new Error("これはダミーミサイルです")
    }
}
