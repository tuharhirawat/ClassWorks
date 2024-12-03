


const properties = [
  { id: 1, title: "New Apartment", location: "New York", price: "$3,000/month", image: "https://www.investopedia.com/thmb/bfHtdFUQrl7jJ_z-utfh8w1TMNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houses_and_land-5bfc3326c9e77c0051812eb3.jpg" },
  { id: 2, title: "City Studio", location: "San Francisco", price: "$2,500/month", image: "https://idealhousesellingonline.weebly.com/uploads/1/3/7/1/137168047/h3_orig.jpg" },
  { id: 3, title: "Luxury Villa", location: "Los Angeles", price: "$5,000/month", image: "https://images.moneycontrol.com/static-mcnews/2023/06/Luxury-homes.png?impolicy=website&width=1600&height=900" },
  { id: 4, title: "Spacious House", location: "Chicago", price: "$3,800/month", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczEWWMf3dUvCDAviwOsmeLs7yBjySeP66vA&s" },
  { id: 5, title: "City Life", location: "New York", price: "$4,000/month", image: "https://www.dsrinfra.com/wp-content/uploads/2024/02/img-feature.jpg" },
  { id: 6, title: "Spacious House", location: "Chicago", price: "$3,800/month", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczEWWMf3dUvCDAviwOsmeLs7yBjySeP66vA&s" },
  { id: 7, title: "City ", location: "New York", price: "$4,000/month", image: "https://www.dsrinfra.com/wp-content/uploads/2024/02/img-feature.jpg" },
  { id: 8, title: "Spacious House", location: "Chicago", price: "$3,800/month", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRczEWWMf3dUvCDAviwOsmeLs7yBjySeP66vA&s" },
  { id: 9, title: "City Life", location: "New York", price: "$4,000/month", image: "https://www.dsrinfra.com/wp-content/uploads/2024/02/img-feature.jpg" },
];

const locationFilter = document.getElementById("Filterlocation");
const propertiesContainer = document.getElementById("propertiesContainer");

locationFilter.innerHTML = properties
  .map(p => p.location)                        
  .reduce((unique, loc) =>                     
    unique.includes(loc) ? unique : [...unique, loc], ["All"])
  .map(loc => `<option value="${loc}">${loc}</option>`)
  .join();

const DisplayProperties = (filter = "All") => {
  propertiesContainer.innerHTML = properties
    .filter(p => filter === "All" || p.location === filter) 
    .map(p => `
      <div class="property-card">
        <img src="${p.image}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.location}</p>
        <p>${p.price}</p>
      </div>
    `).join(""); 
};

locationFilter.addEventListener("change", e => DisplayProperties(e.target.value));

DisplayProperties();

