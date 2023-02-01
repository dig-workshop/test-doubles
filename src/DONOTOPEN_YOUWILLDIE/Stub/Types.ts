export enum Weather {
    SUNNY,
    CLOUDY,
    RAINY,
}

export type WeatherRepository = {
    getByCity: (city: string) => Promise<Weather>
}

export type LaunchMissileSystem = {
    weatherRepository: WeatherRepository
    launch: () => Promise<string>
}
