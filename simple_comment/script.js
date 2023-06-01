import data from './count.json' assert { type: 'json' };

// fetch('count.json')
//   .then(response => response.json())
//   .then(jsonData => {
//     console.log(jsonData);
//   })
//   .catch(error => {
//     console.error(error);
//   });

const likeEl = document.getElementById("likes")
likeEl.innerHTML = data.count