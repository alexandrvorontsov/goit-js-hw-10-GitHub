// export const countrySearch = {
//   url: 'https://restcountries.com',
//   parameters: ['name', 'capital', 'population', 'languages', 'flags'],
//   toFind: '',

//   fetchCountries() {
//     return fetch(
//       `${this.url}/v3.1/name/${this.toFind}?fields=${this.parameters.join(',')}`
//     ).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   },
// };

// const url='https:// ';
// const options= {
//      headers:{
//      autorizations:'...',
// },
// };
// const axios = require('axios');
// Робимо запит для користувача з даним ID
// axios
//   .get('https://restcountries.com/v3.1/name/{name}')
//   .then(response => {
//     // обробка успішного запиту
//     console.log(response);
//   })
//   .catch(function (error) {
//     // обробка помилки
//     console.log(error);
//   })
//   .then(function () {
//     // виконується завжди
//   });
