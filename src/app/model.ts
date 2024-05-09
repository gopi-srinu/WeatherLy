export class Model {
    coord!: {
        lon: number,
        lat: number
    };
    weather!: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ];
    base!: string;
    main!: {
        temp: number,
        feels_like: string,
        temp_min: string,
        temp_max: string,
        pressure: string,
        humidity: string
    };
    visibility!: string;
    wind!: {
        speed: string,
        deg: string
    };
    clouds!: {
        all: string
    };
    dt!: string;
    sys!: {
        type: string,
        id: string,
        country: string,
        sunrise: number,
        sunset: number
    };
    timezone!: string;
    id!: string;
    name!: string;
    cod!: string;
}

export class ThreeDayForeCast {
    list!: [
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: string
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: number
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
        {
            dt: number,
            main: {
                temp: number,
                feels_like: number,
                temp_min: number,
                temp_max: number,
                pressure: number,
                sea_level: number,
                grnd_level: number,
                humidity: number,
                temp_kf: number
            },
            weather: [
                {
                    id: number,
                    main: string,
                    description: string,
                    icon: string
                }
            ],
            clouds: {
                all: string
            },
            wind: {
                speed: number,
                deg: number,
                gust: number
            },
            visibility: number,
            pop: number,
            rain: {
                '3h': string,
            },
            sys: {
                pod: string
            },
            dt_txt: string
        },
            city: {
            id: number,
            name: string,
            coord: {
                lat: number,
                lon: number
            },
            country: string,
            timezone: null,
            sunrise: number,
            sunset: number
        }
    ]
}
