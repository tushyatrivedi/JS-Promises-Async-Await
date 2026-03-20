async function fetchData() {
  let res1 = await fetch("data.json");
  let data = await res1.json();

  console.log(data);
}

function fetchData2() {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
