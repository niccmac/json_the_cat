const request = require(`request`);
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;


const fetchBreedDescription = function(breedName, callback) {
  const urlWithBreed = url + breedName;
  if (!breedName) {
    return callback("Enter breed.");
  }
  request(urlWithBreed, (err, response, body) => {
  
    const data = JSON.parse(body);
    
    if (err) {
      return callback(err, null);
    }
  
    if (data[0])  {
      return callback(null, data[0].description);
    } else {
      return callback("Invalid cat breed.");
    }
  });
};

module.exports = {
  fetchBreedDescription
};