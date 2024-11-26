// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function photodisplay() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  data.forEach((data) => {
    const img = document.createElement("img");
    const titel = document.createElement("alert");
    const alert = document.createElement("alert");
    const button = document.createElement("button");
    img.src = data.thumbnailUrl;
    titel.textContent = data.titel;

    alert.appendChild(titel);
    button.appendChild(alert);

    document.body.appendChild(img);
    document.body.appendChild(button);
  });
}
photodisplay();
