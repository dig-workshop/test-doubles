import {AuthServer, User} from './Types'

export default class FakeAuthServer implements AuthServer {
    authedUsers: string[] = []

    login(userId: string): void {
        this.authedUsers.push(userId)
    }

    getUser(userId: string): Promise<User | undefined> {
        if (this.authedUsers.includes(userId)) {
            return Promise.resolve({
                name: "user name",
                email: "example@mail.com"
            })
        }
        return Promise.resolve(undefined)
    }
}