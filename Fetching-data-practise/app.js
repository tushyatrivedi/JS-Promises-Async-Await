/** 
🛠️ Requirements
1. Fetch data from an API
Use this:
https://jsonplaceholder.typicode.com/users
2. Display in the DOM
For each user, show:
Name
Email

👉 Not just console.log — actually render it on the page
3. Show loading state
Before data comes:
“Loading…”
After data loads:
→ Replace with actual data

4. Handle errors
If something fails:
“Failed to fetch data”

🧠 Hints (Don’t Skip Thinking)
Use async/await
Use document.createElement OR innerHTML
Think step by step:

Show loading
Fetch
Parse JSON
Render
Catch errors

🧱 Expected Flow (Mentally)
Start
 → Show "Loading..."
 → Fetch API
 → Await response
 → Convert to JSON
 → Loop users
 → Render to DOM
 → Handle errors if any
 */

let dummyData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
];

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Failed to fetch data");
  }
  //data is an array containing list of objects having user and email
}

let p = document.createElement("p");
document.body.appendChild(p).innerHTML = "Loading....";

getData().then((val) => {
  data = val;
  document.querySelector("body").removeChild(p);
  //for each row of data add table row and 2 table data elements
  data.forEach((element) => {
    let row = document.createElement("tr");
    let tdata1 = document.createElement("td");
    tdata1.innerText = element.name;
    let tdata2 = document.createElement("td");
    tdata2.innerText = element.email;

    row.appendChild(tdata1);
    row.appendChild(tdata2);
    document.querySelector("tbody").appendChild(row);
  });
});
