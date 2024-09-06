import fetch from 'node-fetch';

function fetchAPI(url, callback) {
    fetch(url,{
      method: 'GET',
      headers: {
      "Accept": "application/json",
      'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data  => {
      callback(data);
    })
    .catch((e) => {
      callback(null);
    });
}

export default fetchAPI;
