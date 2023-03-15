const http = require("http");
const axios = require("axios");

const server = http.createServer(function (req, res) {
//   let urls = [
//     `http://api.openweathermap.
// 	org/data/2.5/weather?q=ernakulam&units=metric&appid=8fde9908dbbd67683ee47c18673c3af2`,
//     `http://api.openweathermap.
// 		org/data/2.5/weather?q=thrissur&units=metric&appid=8fde9908dbbd67683ee47c18673c3af2`,
//   ];
//   if (req.url === "/multiplecities" && req.method === "GET") {
//     const requests = urls.map((url) => axios.get(url));
//     Promise.all(requests)
//       .then((responses) => {
//         let responsearr = [];

//         responses.forEach((response) => {
//           responsearr.push({
//             City: response.data.name,
//             WeatherDetails: {
//               main: response.data.weather[0].main,
//               description: response.data.weather[0].description,
//               icon: response.data.weather[0].icon,
//             },
//           });
//           console.log(response.data);

//           //console.log(response.data.weather);
//         });
//         let responsearrstr = JSON.stringify(responsearr);
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.write(responsearrstr);
//         res.end();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  //API call to get weather data by city name
  if (req.url === "/citybycityname") {
    city = "london";
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=8fde9908dbbd67683ee47c18673c3af2";
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

    });
  }
   //API call to get weather data by city Id
  if (req.url === "/citybycityId") {
	const cityId = 2643743; 
    let url =
      "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityId +
      "&appid=8fde9908dbbd67683ee47c18673c3af2";
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

    });
  }
   //API call to get weather data by city Id
   if (req.url === "/all") {
	const cityId = 2643743; 
    let url ="http://api.openweathermap.org/data/2.5/group?id=2643741,2644688,2633352,2654675,2988507,2990969,2911298,2925535,2950159,3120501,3128760,5128581,4140963,4930956,5106834,5391959,5368361,5809844,4099974,4440906&appid=de6d52c2ebb7b1398526329875a49c57&units=metric";
    axios.get(url).then((response) => {
      let responsestr = JSON.stringify(response.data);
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.write(responsestr);
      res.end();

    });
  }

  // if (req.url === "/multiplecities" && req.method === "GET") {
  // 	axios.get(`http://api.openweathermap.
  // 	org/data/2.5/weather?q=ernakulam&units=metric&appid=8fde9908dbbd67683ee47c18673c3af2`)
  // 	.then(apiresponse=>{
  // 		console.log(apiresponse.data.name);
  // 		console.log(apiresponse.data.weather);

  // 	})
  // 	.catch((error=>{
  // 		console.log(error);
  // 	}))
  // 	}
});
server.listen(7000);
