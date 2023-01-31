import {AuthServer, User} from './Types'

// Fakeの役割を果たすように書き換えてください
export default class FakeAuthServer implements AuthServer {
    private authedUsers: string[] = []

    login(userId: string): void {
    }

    getUser(userId: string): Promise<User | undefined> {
        return Promise.resolve(undefined)
    }
}