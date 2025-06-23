import tours from "../data/Tours.js";
import '../styles/TourDetail.css';

function TourDetailPage(tourId) {
  const tour = tours.find(t => t.id === parseInt(tourId));
  if (!tour) return document.createTextNode("ტური ვერ მოიძებნა");

  const container = document.createElement("div");
  container.className = "tour-detail fade-in";

  const img = document.createElement("img");
  img.src = `/${tour.image}`;
  img.alt = tour.title;
  img.className = "tour-detail-img";

  const title = document.createElement("h2");
  title.textContent = tour.title;
  title.className = "tour-detail-title";

  const region = document.createElement("p");
  region.textContent = `რეგიონი: ${tour.region}`;
  region.className = "tour-detail-info";

  const price = document.createElement("p");
  price.textContent = `ფასი: ${tour.price} ₾`;
  price.className = "tour-detail-info";

  const views = document.createElement("p");
  views.textContent = `ნახვები: ${tour.views}`;
  views.className = "tour-detail-info";

  const info = document.createElement("p");
  info.textContent = tour.info || "ინფორმაცია არ არის.";
  info.className = "tour-detail-description";

  // დაჯავშნის ღილაკი
  const btn = document.createElement("button");
  btn.textContent = "დაჯავშნა";
  btn.className = "book-btn";

  // ფორმა
  const form = document.createElement("form");
  form.className = "booking-form";
  form.style.display = "none";

  form.innerHTML = `
    <h3>დაჯავშნის ფორმა</h3>
    <input type="text" name="name" placeholder="სახელი" required />
    <input type="tel" name="phone" placeholder="ტელეფონი" required />
    <input type="date" name="date" required />
    <input type="number" name="count" placeholder="რაოდენობა" min="1" value="1" required />
    <button type="submit">გაგზავნა</button>
  `;

  btn.onclick = () => {
    form.style.display = "block";
    btn.style.display = "none";
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    const name = form.name.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const count = form.count.value;

    alert(`დაჯავშნა მიღებულია: ${name}, ${phone}, ${date}, ${count} ადამიანი`);
    form.reset();
    form.style.display = "none";
    btn.style.display = "inline-block";
  };

  container.append(img, title, region, price, views, info, btn, form);
  return container;
}

export default TourDetailPage;
