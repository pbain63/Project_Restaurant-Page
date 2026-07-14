import menuImage1 from "./images/1. The Classic Signature Burger.png";
import menuImage2 from "./images/2. Artisanal Margherita Pizza.png";
import menuImage3 from "./images/3. Creamy Fettuccine Alfredo.png";
import menuImage4 from "./images/4. Mediterranean Garden Salad.png";
import menuImage5 from "./images/5. Premium Seared Ribeye Steak.png";

const menuItems = [
  {
    image: menuImage1,
    price: "$14.99",
    name: "The Classic Signature Burger",
    description:
      "A thick, juicy flame-grilled beef patty layered with melted sharp cheddar, crisp lettuce, and ripe tomatoes on a toasted brioche bun. This mouthwatering staple is served hot with a side of our signature smoky house sauce.",
  },
  {
    image: menuImage2,
    price: "$16.50",
    name: "Artisanal Margherita Pizza",
    description:
      "Authentic hand-tossed crust topped with rich, slow-simmered tomato sauce, melted fresh mozzarella, and aromatic basil. Baked to perfection in a traditional wood-fired oven.",
  },
  {
    image: menuImage3,
    price: "$18.95",
    name: "Creamy Fettuccine Alfredo",
    description:
      "Tender fettuccine tossed in a rich garlic parmesan cream sauce and topped with juicy grilled chicken and freshly shaved parmesan.",
  },
  {
    image: menuImage4,
    price: "$12.50",
    name: "Mediterranean Garden Salad",
    description:
      "A crisp bed of romaine lettuce with cherry tomatoes, cucumbers, kalamata olives, feta cheese, and extra-virgin olive oil dressing.",
  },
  {
    image: menuImage5,
    price: "$34.99",
    name: "Premium Seared Ribeye Steak",
    description:
      "A thick hand-cut ribeye steak seared to perfection, topped with garlic-herb butter and served with roasted asparagus.",
  },
];

function createMenuCard(item) {
  const card = document.createElement("div");
  card.classList.add("menuCard");

  const image = document.createElement("img");
  image.classList.add("cardImage");
  image.src = item.image;
  image.alt = item.name;

  const price = document.createElement("p");
  price.classList.add("itemPrice");
  price.textContent = item.price;

  const description = document.createElement("p");
  description.classList.add("itemDescription");
  description.textContent = item.description;

  card.append(image, price, name, description);

  return card;
}

function loadMenu() {
  const containerMenu = document.createElement("div");
  containerMenu.classList.add("menuContainer");

  menuItems.forEach((item) => {
    containerMenu.appendChild(createMenuCard(item));
  });

  return containerMenu;
}

export { loadMenu };
