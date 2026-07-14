function createRestaurantInfo() {
  const nameAndDescriptionSection = document.createElement("div");

  const title = document.createElement("h1");
  title.id = "restaurantName";
  title.textContent = "Appetizer (আহার বিলাস)";

  const description = document.createElement("p");
  description.id = "restaurantDescription";
  description.textContent =
    "Welcome to Appetizer (আহার বিলাস), where culinary passion meets exceptional flavor. We craft unforgettable dining experiences using premium, fresh ingredients across a carefully curated menu. From our juicy Classic Signature Burger and artisanal pizzas to rich pastas and perfectly seared steaks, we bring comfort food to life with an upscale twist. Whether you're craving a light Mediterranean salad or an indulgent ribeye dinner, we promise a delightful journey for every palate.";

  nameAndDescriptionSection.append(title, description);

  return nameAndDescriptionSection;
}

function createHoursSection() {
  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hours";

  const heading = document.createElement("h2");
  heading.id = "hoursHeading";
  heading.textContent = "Hours";

  const schedule = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 10pm",
    "Thursday: 6am - 10pm",
    "Friday: 8am - 10pm",
    "Saturday: 6am - 6pm",
  ];

  hoursDiv.appendChild(heading);

  schedule.forEach((day) => {
    const dateAndTime = document.createElement("p");
    dateAndTime.textContent = day;
    hoursDiv.appendChild(dateAndTime);
  });

  return hoursDiv;
}

function createLocationSection() {
  const location = document.createElement("div");
  location.id = "location";

  const heading = document.createElement("h2");
  heading.id = "locationHeading";
  heading.textContent = "Location";

  const address = document.createElement("p");
  address.id = "locationText";
  address.textContent = "160/2, Malibagh, Dhaka-1217.";

  location.append(heading, address);

  return location;
}

function loadHome() {
  const containerHome = document.createElement("div");

  containerHome.appendChild(createRestaurantInfo());
  containerHome.appendChild(createHoursSection());
  containerHome.appendChild(createLocationSection());

  return containerHome;
}

export { loadHome };
