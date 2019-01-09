const fortune = (child, partner, geoLocation, job, house) => `You will have ${
  child !== 0 ? child : "no"
} children, married to ${partner} living in ${geoLocation} in a ${house}qm house, 
and working as a ${job}`;

//1. console log with info provided by the user
let job = prompt("What is your job?", "magician");
let aLocation = prompt("Location?", "Berlin");
let house = prompt("House size?", 50);
let partner = prompt("Partner name", "Lucy");
let child = prompt("Number of children", 4);

//Print it out
// console.log(fortune(child, partner, aLocation, job, house));

//2. random values
//arrays - 3 because the rest is number plus random number for children plus house size
const jobs = [
  "Star Salesman",
  "Class Secretary",
  "Drugdealer",
  "bartender",
  "clown",
  "rockstar"
];

const locations = [
  "Miami",
  "New York",
  "Istanbul",
  "Berlin",
  "Münich",
  "Görlitzer Park"
];

const partners = ["Karl", "Anna", "Mario", "Anja"];

const JobId = Math.floor(Math.random() * jobs.length);
const LocationId = Math.floor(Math.random() * locations.length);
const PartnersId = Math.floor(Math.random * partners.length);
const kids = Math.floor(Math.random() * Math.floor(10));
const qm = Math.floor(Math.random() * Math.floor(300));

// console.log(
//   fortune(kids, partners[PartnersId], locations[LocationId], jobs[JobId], house)
// );

// Print to DOM element
document.getElementById("fortune").innerHTML = fortune(
  kids,
  partners[PartnersId],
  locations[LocationId],
  jobs[JobId],
  house
);
