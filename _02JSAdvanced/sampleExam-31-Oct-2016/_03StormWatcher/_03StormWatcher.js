// https://judge.softuni.bg/Contests/Practice/Index/352#2
'use strict';

let Record = (() => {
    let closureId = 0;

    return class {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = closureId++;
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }

        get status() {
            if (this.temperature < 20
                && (this.pressure < 700 || this.pressure > 900)
                && this.windSpeed > 25) {
                return 'Stormy';
            }

            return 'Not stormy';
        }

        toString() {
            let weatherStatus = 'Not stormy';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weatherStatus = 'Stormy';
            }

            let result = [];
            result.push(`Reading ID: ${this.id}`);
            result.push(`Temperature: ${this.temperature}*C`);
            result.push(`Relative Humidity: ${this.humidity}%`);
            result.push(`Pressure: ${this.pressure}hpa`);
            result.push(`Wind Speed: ${this.windSpeed}m/s`);
            result.push(`Weather: ${this.status}`);

            return result.join('\n');
        }
    }
})();

class Record1 {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.id = Record1.getId();
        this.temperature = Number(temperature);
        this.humidity = Number(humidity);
        this.pressure = Number(pressure);
        this.windSpeed = Number(windSpeed);
    }

    static getId() {
        if (!this._id) {
            this._id = 0;
        }
        return this._id++;
    }

    get status() {
        if (this.temperature < 20
            && (this.pressure < 700 || this.pressure > 900)
            && this.windSpeed > 25) {
            return 'Stormy';
        }

        return 'Not stormy';
    }

    toString() {
        let weatherStatus = 'Not stormy';
        if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
            weatherStatus = 'Stormy';
        }

        let result = [];
        result.push(`Reading ID: ${this.id}`);
        result.push(`Temperature: ${this.temperature}*C`);
        result.push(`Relative Humidity: ${this.humidity}%`);
        result.push(`Pressure: ${this.pressure}hpa`);
        result.push(`Wind Speed: ${this.windSpeed}m/s`);
        result.push(`Weather: ${this.status}`);

        return result.join('\n');
    }
}


let record1 = new Record1(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record1(10, 40, 680, 30);
console.log(record2.toString());