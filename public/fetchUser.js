const getEmployees = document.getElementById("employees");

let fetchData = () => {
  axios
    .get("https://randomuser.me/api/?results=10")
    .then((res) => {
      console.log(res.data.results);
      const mapData = res.data.results
        .map((result) => {
          return `
          <div class="column" crossorigin="use-credentials">
          <div class="card">
            <img
            class="inverted user-image"
              src=${result.picture.large}
              alt="User Image"
            />
            <div class="user-data">
            <h1 class="name">${result.name.first} ${result.name.last}  </h1>
            <div class="title">${result.location.country}</div>
            <p>${result.email}</p>
            <p style="
            margin-top: 10px" >${result.phone}</p>
            <button class="button-info" style="
            margin-top: 20px" 
            >Info</button>
            </div>
            </div>
        </div>`;
        })
        .join("");
      document.getElementById("row-card").innerHTML = mapData;
    })
    .catch((err) => {
      console.log(err);
    });
}

window.onload = () => {
  fetchData()
}

getEmployees.addEventListener("click", fetchData);