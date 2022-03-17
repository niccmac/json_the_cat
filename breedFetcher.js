const request = require(`request`);
const arg = process.argv.slice(2);



request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (err, code, body) => {
  if (err) {
    console.log(err);
    console.log(`code error:`, code);
  }
  const data = JSON.parse(body);
  console.log(data[0].description);
  
});