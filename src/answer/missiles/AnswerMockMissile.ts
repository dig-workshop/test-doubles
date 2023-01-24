import {Missile} from "../../LaunchMissile";

export class AnswerMockMissile implements Missile {
    password = ""

    fire(): boolean {
        if (this.password === "black300") {
            return true
        } else {
            return false
        }
    }

    assertMethod(): void {
        expect(this.password).toEqual("black300")
    }
}