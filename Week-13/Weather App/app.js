const http = require("http");
const axios = require("axios");

const server = http.createServer(function (req, res) {
  const API_KEY = "8fde9908dbbd67683ee47c18673c3af2";
  const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather";
  //API call to get weather data by city name
  if (req.url === "/citybycityname") {
    city = "london";
    let url = `${WEATHER_API}?q=${city}&appid=${API_KEY}`;
    axios.get(url).then((response) => {
      let resarr = [];
      resarr.push({
        City: response.data.name,
        WeatherDetails: {
          main: response.data.weather[0].main,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        },
      });
      let responsestr = JSON.stringify(resarr);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(responsestr);
      res.end();
    }).catch((error) => {
      console.log(`API call to get weather data by city name failed:${error}`);
    });
  }
  //API call to get weather data by city Id
  if (req.url === "/citybycityId") {
    const cityId = 2643743;
    let url = `${WEATHER_API}?id=${cityId}&appid=${API_KEY}`;
    axios.get(url).then((response) => {
      let resarr = [];
      resarr.push({
        City: response.data.name,
        WeatherDetails: {
          main: response.data.weather[0].main,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        },
      });
      let responsestr = JSON.stringify(resarr);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(responsestr);
      res.end();
    }).catch((error) => {
      console.log(`API call to get weather data by city Id failed:${error}`);
      
    });
  }
  //API call to get weather data of multiple cities
  if (req.url === "/all") {
    let url = `http://api.openweathermap.org/data/2.5/group?id=2643741,2644688,2633352,2654675,2988507,
      2990969,2911298,2925535,2950159,3120501,3128760,5128581,4140963,4930956,5106834,5391959,
      5368361,5809844,4099974,4440906&appid=${API_KEY}&units=metric`;
    axios.get(url).then((response) => {
      let responsestr = JSON.stringify(response.data);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(responsestr);
      res.end();
    }).catch((error) => {
      console.log(`API call to get weather data of multiple cities failed:${error}`);

    });
  }

  // Api should return the data in pagination.
  // Set up the parameters for pagination
  const pageSize = 1;
  const pageNum = 10;

  // Make a request to the WeatherAPI with the pagination parameters
  if (req.url === "/pagination") {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: "London",
          appid: API_KEY,
          cnt: pageSize,
          page: pageNum,
        },
      })
      .then((response) => {
        let responsestr = JSON.stringify(response.data);
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.write(responsestr);
        res.end();
      }).catch((error) => {
        console.log(`Api should return the data in pagination failed:${error}`);

      });
  }

  const FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast";
  // Detailed Forecast for the next X days
  if (req.url === "/forecast") {
    getForecast(7); // Get the 7-day forecast

    function getForecast(numDays) {
      const url = `${FORECAST_URL}?q=London&appid=${API_KEY}&units=metric`;
      axios
        .get(url)
        .then((response) => {
          let resarr = [];
          const forecast = response.data.list.slice(0, numDays);
          resarr.push(`Forecast for the next ${numDays} days of London`);
          forecast.forEach((day) => {
            const date = new Date(day.dt * 1000);
            const temp = day.main.temp;
            const conditions = day.weather[0].description;
            const correctdate = date.toDateString();

            resarr.push(
              `correctdate:${correctdate},temp:${temp}°C,condition:${conditions}`
            );
          });
          let responsestr = JSON.stringify(resarr);
          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.write(responsestr);
          res.end();
        })
        .catch((error) => {
          console.log(`Api which returns X days should be decided by the user failed:${error}`);

        });
    }
  }
  // Filter the data by any particular city, any particular date
  if (req.url === "/forecastbydatecity") {
    getForecast(10,"2023-03-20", "London"); // Get the 10-day forecast starting from March 20, 2023 of london
    function getForecast(numDays, startDate, city) {
      const url = `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`;
      axios
        .get(url)
        .then((response) => {
          let resarr = [];
          const forecast = response.data.list.filter((day) => {
            const date = new Date(day.dt * 1000);
            const start = new Date(startDate);
            return (
              date >= start &&
              date < new Date(start.getTime() + numDays * 24 * 60 * 60 * 1000)
            );
          });

          resarr.push(
            `Forecast for the next ${numDays} days starting from ${startDate}:of ${city}`
          );

          forecast.forEach((day) => {
            const date = new Date(day.dt * 1000);
            const temp = day.main.temp;
            const conditions = day.weather[0].description;
            const correctdate = date.toDateString();
            resarr.push(
              `correctdate:${correctdate},temp:${temp}°C,condition:${conditions}`
            );
            console.log(`${date.toDateString()}: ${temp}°C, ${conditions}`);
          });
          let responsestr = JSON.stringify(resarr);
          res.setHeader("Content-Type", "application/json");
          res.writeHead(200);
          res.write(responsestr);
          res.end();
        })
        .catch((error) => {
          console.log(`Api which returns the data by any particular city, any particular date failed:${error}`);

        });
    }
  }
});
server.listen(7000);
