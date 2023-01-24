import {Missile} from "../../LaunchMissile";

export class AnswerDummyMissile implements Missile {

    fire(): void {
        throw new Error("これはダミーミサイルです")
    }
}
