import {Missile} from "./Types";

export class DummyMissile implements Missile {

    launch() {
        // ここにコードを記述して下さい
        throw new Error("これはダミーミサイルです")
    }
}
