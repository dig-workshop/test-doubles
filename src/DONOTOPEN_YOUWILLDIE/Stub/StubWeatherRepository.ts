import {Weather, WeatherRepository} from './Types'

export class StubWeatherRepository implements WeatherRepository {
    getByCity_returnValue = Promise.resolve(Weather.SUNNY)

    getByCity(city: string): Promise<Weather> {
        return Promise.resolve(this.getByCity_returnValue)
    }
}
