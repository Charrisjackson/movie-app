
// const axios = require("axios");

// const recommend = (id) => {
//   const options = {
//     method: "GET",
//     url: "https://api.themoviedb.org/3/movie/" + id + "/recommendations",
//     params: { language: "en-US", page: "1" },
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzI5OWU5YjViZGRlYjExODUyYjc1NjlmNGFlNjI3ZCIsIm5iZiI6MTczNDQ2NDg2Ny4xMDgsInN1YiI6IjY3NjFkNTYzYzc1MGRkMTFjMmZiMzZhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eNtrbEk88prhIp7mplf_bH_-qqN33QD_PuAf7ObCnA4",
//     },
//   };

//   axios
//     .request(options)
//     .then((res) => {
//       let arr = [];
//       res.data.results.forEach((element) => {
//         arr.push(element.title);
//         console.log(element.title);
//       });
//     })

//     .catch((err) => console.error(err));
// };

// recommend(268);

// module.exports = recommend;
