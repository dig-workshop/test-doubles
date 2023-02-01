import {Weather, WeatherRepository} from './Types'

// ただしくStubの役割を果たすように書き換えてください
export class StubWeatherRepository implements WeatherRepository {
    getByCity_returnValue = Promise.resolve(Weather.SUNNY)

    getByCity(city: string): Promise<Weather> {
        return Promise.resolve(Weather.SUNNY)
    }
}
