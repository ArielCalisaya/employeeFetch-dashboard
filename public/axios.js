const getEmployees = document.getElementById("employees");
const postBtn = document.getElementById("post-btn");

const getData = () => {
  axios
    .get("https://randomuser.me/api/?results=5")
    .then((res) => {
      console.log(res.data.results);
      const mapData = res.data.results
        .map((result) => {
          return `<p>Name: ${result.name.first}</p>`;
        }).join("")
        document.getElementById("mapea").innerHTML = mapData
    })
    .catch((err) => {
      console.log(err);
    });
};

// const postData = () => {
//     axios.post("")
// }

getEmployees.addEventListener("click", getData);
