const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_rmQWlneStnuNV91DnIIkZqCXNbXtNlJ2od2aN4aumid6UtcrtjJmw3NS6eTTyhHf';

export function fetchBreeds() {
  return (
    fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`)
      .then(resp => {
        console.log(resp);
        if (!resp.ok) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      })
      // .then(result => {
      //     console.log(result);
      // })
      .catch(error => console.log(error))
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
