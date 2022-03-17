
const   { fetchBreedDescription } = require(`./breedFetcher`);

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    
    return err;
  }
  return desc;
});
