import {AuthServer, LaunchMissileSystem, Missile} from './Types'

export class LaunchMissileImpl implements LaunchMissileSystem {
    missile: Missile
    authServer: AuthServer

    constructor(missile: Missile, authServer: AuthServer) {
        this.missile = missile
        this.authServer = authServer
    }

    login(userId: string) {
        this.authServer.login(userId)
    }

    async launchBy(userId: string) {
        const user = await this.authServer.getUser(userId)
        if (user !== undefined) {
            this.missile.fire()
        }
    }

}