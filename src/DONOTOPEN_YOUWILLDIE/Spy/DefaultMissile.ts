import {Missile} from './Types'

export default class DefaultMissile implements Missile {
    fire() {
        console.log("本物のミサイルが発射されたよ")
    }
}