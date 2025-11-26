let showDetails = true;

let cars = [];

$(document).ready(function () {
  $.getJSON("cars.json", function(data) {
    cars = data;
    carCards();
  });
});

// Create cars cards
const carCards = () => {
  const wrapper = document.getElementById("carWrapper");

  cars.forEach((car) => {
    let card = document.createElement("div");
    card.classList.add("carCard");

    let picture = document.createElement("img");
    picture.src = car.img;
    picture.alt = car.carName;
    card.append(picture);

    let info = document.createElement("div");
    info.classList.add("carInfo");

    let title = document.createElement("h2");
    title.textContent = car.carName;
    info.append(title);

    let brand = document.createElement("p");
    brand.textContent = "Brand: " + car.brand;
    brand.classList.add("brand");
    info.append(brand);

    let year = document.createElement("p");
    year.textContent = "Year: " + car.year;
    year.classList.add("year");
    info.append(year);

    let engine = document.createElement("p");
    engine.textContent = "Engine: " + car.engine;
    engine.classList.add("engine");
    info.append(engine);

    let doors = document.createElement("p");
    doors.textContent = "Doors: " + car.doors;
    doors.classList.add("doors");
    info.append(doors);

    card.append(info);
    wrapper.append(card);
  });
};


// Sort cars by brand
const filterCars = (brandName) => {
  $(".carCard").show();

  if (brandName !== "all") {
    $(".carCard").each(function () {
      let brand = $(this).find(".brand").text().toLowerCase();
      if (!brand.includes(brandName.toLowerCase())) {
        $(this).hide();
      }
    });
  }
};

$(document).ready(carCards);
