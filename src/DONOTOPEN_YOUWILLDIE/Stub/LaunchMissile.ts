import {LaunchMissileSystem, Weather, WeatherRepository} from './Types'


export class LaunchMissileImpl implements LaunchMissileSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch() {
        // ここにコードを記述して下さい
        const weather = await this.weatherRepository.getByCity("Nagoya")
        if (weather === Weather.SUNNY) {
            return "ミサイルを発射しました"
        }
        return "自爆しました"
    }
}