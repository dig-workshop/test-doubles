import {PasswordProvider} from './Types'

export default class StubPasswordProvider implements PasswordProvider {
    getValue_returnValue = Promise.resolve('')
    getValue(): Promise<string> {
        return this.getValue_returnValue
    }
}