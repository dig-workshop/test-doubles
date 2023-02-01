import {Weather, WeatherRepository} from './Types'


export default class DefaultWeatherRepository implements WeatherRepository {
    async getByCity(city: string): Promise<Weather> {
        const response = await fetch(`https://www.weather.com/${city}`)
        return await response.json() as Weather
    }
}