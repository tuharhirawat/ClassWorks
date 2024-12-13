// script.js
document.addEventListener("DOMContentLoaded", async () => {
    const brandFilter = document.getElementById("brand-filter");
    const minPriceFilter = document.getElementById("min-price");
    const maxPriceFilter = document.getElementById("max-price");
    const filterBtn = document.getElementById("filter-btn");
    const carListings = document.getElementById("car-listings");
  
    // Mock API data
    const apiData = [
      { id: 1, brand: "Maruti Suzuki", model: "Swift", price: 600000, year: 2023, image: "https://example.com/swift.jpg" },
      { id: 2, brand: "Hyundai", model: "i20", price: 800000, year: 2023, image: "https://example.com/i20.jpg" },
      { id: 3, brand: "Tata", model: "Nexon", price: 1200000, year: 2023, image: "https://example.com/nexon.jpg" },
      { id: 4, brand: "Mahindra", model: "XUV300", price: 1100000, year: 2023, image: "https://example.com/xuv300.jpg" },
      { id: 5, brand: "Kia", model: "Seltos", price: 1500000, year: 2023, image: "https://example.com/seltos.jpg" },
    ];
  
    // Populate brand filter
    const brands = [...new Set(apiData.map(car => car.brand))];
    brands.forEach(brand => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      brandFilter.appendChild(option);
    });
  
    // Render car listings
    const renderCars = (cars) => {
      carListings.innerHTML = "";
      cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
          <img src="${car.image}" alt="${car.model}">
          <div class="details">
            <h3>${car.brand} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p class="price">₹${car.price.toLocaleString()}</p>
          </div>
        `;
        carListings.appendChild(card);
      });
    };
  
    // Initial render
    renderCars(apiData);
  
    // Filter functionality
    filterBtn.addEventListener("click", () => {
      const selectedBrand = brandFilter.value;
      const minPrice = minPriceFilter.value ? parseInt(minPriceFilter.value) : 0;
      const maxPrice = maxPriceFilter.value ? parseInt(maxPriceFilter.value) : Infinity;
  
      const filteredCars = apiData.filter(car => {
        const matchesBrand = selectedBrand === "all" || car.brand === selectedBrand;
        const matchesPrice = car.price >= minPrice && car.price <= maxPrice;
        return matchesBrand && matchesPrice;
      });
  
      renderCars(filteredCars);
    });
  });
  