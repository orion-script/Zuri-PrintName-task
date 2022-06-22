const myDetails = {
  name: "Olaniyi John",
  country: "Nigeria",
  height: "90cm",
};

console.log(myDetails);

console.log(
  `I'm ${myDetails.name} by name and ${myDetails.height} tall, i'm from ${myDetails.country}`
);

const message = document.querySelector(".h3");
const body = document.querySelector("body");

message.textContent = `I'm ${myDetails.name} by name and ${myDetails.height} tall, i'm from ${myDetails.country}`;

body.style.backgroundColor = "rgb(13, 13, 13)";
body.style.color = "white";
body.style.textAlign = "center";
body.style.fontSize = "50px";
