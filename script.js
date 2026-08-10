const chocolateBars = [
  "01-heart-cluster-chocolate.png", "02-abstract-pattern-chocolate.png", "03-yellow-dress-fruit-chocolate.png",
  "04-woman-strawberry-chocolate.png", "05-colorful-balloon-chocolate.png", "06-classic-balloon-chocolate.png",
  "07-paris-chocolate.png", "08-decorated-chocolate.png", "09-decorated-chocolate.png", "10-decorated-chocolate.png",
  "11-decorated-chocolate.png", "12-decorated-chocolate.png", "13-decorated-chocolate.png", "14-decorated-chocolate.png",
  "15-decorated-chocolate.png", "16-christmas-reindeer-chocolate.png", "17-classic-chocolate.png",
  "18-classic-chocolate.png", "19-classic-chocolate.png", "20-classic-chocolate.png", "21-geometric-mixed-chocolate.png",
  "25-fashion-macarons-chocolate.png", "26-sculpted-woman-flowers-chocolate.png", "27-pink-floral-chocolate.png",
  "28-mint-pink-dress-chocolate.png", "29-yellow-wedding-dress-chocolate.png"
];

const track = document.querySelector("#chocolate-track");

function makeGroup(hidden = false) {
  const group = document.createElement("div");
  group.className = "marquee-group";
  if (hidden) group.setAttribute("aria-hidden", "true");
  chocolateBars.forEach((file, index) => {
    const item = document.createElement("div");
    item.className = "moving-bar";
    const image = document.createElement("img");
    image.src = `assets/products/${file}`;
    image.alt = hidden ? "" : `Custom chocolate bar design ${index + 1}`;
    image.loading = "lazy";
    item.appendChild(image);
    group.appendChild(item);
  });
  return group;
}

if (track) {
  track.append(makeGroup(), makeGroup(true));
}

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => link.closest("details")?.removeAttribute("open"));
});
