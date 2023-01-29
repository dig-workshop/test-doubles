import {AnswerMissile} from "./AnswerTypes";

export class AnswerDummyMissile implements AnswerMissile {

    fire() {
        throw new Error("これはダミーミサイルです")
    }
}
