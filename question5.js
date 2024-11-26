// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function displaypost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((data) => {
    const titleEl = document.createElement("div");
    const bodyeEl = document.createElement("div");

    titleEl.textContent = data.title;
    bodyeEl.textContent = data.body;

    titleEl.style.backgroundColor = "#B4E7B2";

    document.style;

    document.body.appendChild(titleEl);
    document.body.appendChild(bodyeEl);
  });
}
displaypost();
