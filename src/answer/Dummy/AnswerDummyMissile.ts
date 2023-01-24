import {AnswerMissile} from "./AnswerTypes";

export class AnswerDummyMissile implements AnswerMissile {

    passwordCheck() {
        throw new Error("これはダミーミサイルです")
    }
}
