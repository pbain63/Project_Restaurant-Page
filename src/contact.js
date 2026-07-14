import mapImage from "./images/map.png";

function loadContact() {
  const containerContact = document.createElement("div");
  // const nameDescriptionDiv = document.createElement("div");
  const nameOfContact = document.createElement("p");
  const mobileNumber = document.createElement("p");
  const email = document.createElement("p");
  const imageOfMap = document.createElement("img");

  nameOfContact.classList.add("contactName");
  mobileNumber.classList.add("contactMobile");
  email.classList.add("mail");
  imageOfMap.classList.add("mapImage");
  imageOfMap.src = mapImage;

  nameOfContact.textContent = "Prodip Bain" ;
  mobileNumber.textContent = "+8001768021717" ;
  email.textContent = "prodipbain63@gmail.com" ;

  containerContact.appendChild(nameOfContact);
  containerContact.appendChild(mobileNumber);
  containerContact.appendChild(email);
  containerContact.appendChild(imageOfMap);

  return containerContact;
}

export { loadContact };
