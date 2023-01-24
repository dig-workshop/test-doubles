import {DummyMissile} from "../AnswerTypes";

export class AnswerDummyMissile implements DummyMissile {

    passwordCheck(): void {
        throw new Error("これはダミーミサイルです")
    }
}
