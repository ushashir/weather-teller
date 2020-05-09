class Weather {
    constructor (city, state ) {
        this.apiKey = '1b82c09f9751efd152668015cfe02aaf';
        this.city = city;
        this.state = state;
    }
    // Feth weather from api
    async getWeather(){
        const response = await fetch('https://api.darksky.net/forecast/${this.apiKey}/${this.state},${this.city}');
        const responseData = await response.json();
        return responseData 
    }
}


// git app client detail url
// httpf://github.com/settings/applications/1164996